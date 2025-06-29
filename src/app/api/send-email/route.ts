import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting storage (simple in-memory for single instance)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 emails per hour per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  honeypot?: string;
}

// Validation helper functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[\r\n\t]/g, ' ').substring(0, 1000);
};

const validateInput = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Required field validation
  if (!data.name?.trim()) {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email.trim())) {
    errors.push('Please provide a valid email address');
  }

  if (!data.message?.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (data.message.trim().length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  // Optional field validation
  if (data.phone && data.phone.length > 20) {
    errors.push('Phone number is too long');
  }

  if (data.company && data.company.length > 100) {
    errors.push('Company name is too long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

const checkRateLimit = (clientIP: string): boolean => {
  const now = Date.now();
  const clientData = rateLimit.get(clientIP);

  if (!clientData) {
    rateLimit.set(clientIP, { count: 1, lastReset: now });
    return true;
  }

  // Reset counter if window has passed
  if (now - clientData.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(clientIP, { count: 1, lastReset: now });
    return true;
  }

  // Check if under limit
  if (clientData.count < RATE_LIMIT_MAX) {
    clientData.count++;
    return true;
  }

  return false;
};

export async function POST(req: NextRequest) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*', // Replace with your domain in production
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Get client IP for rate limiting
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   req.headers.get('x-real-ip') || 
                   '127.0.0.1';

  // Check rate limit
  if (!checkRateLimit(clientIP)) {
    return NextResponse.json({ 
      message: 'Too many requests. Please try again later.',
      success: false 
    }, { status: 429, headers });
  }

  try {
    const body = await req.json();
    const { name, email, phone, company, message, honeypot }: ContactFormData = body;

    // Honeypot spam protection
    if (honeypot) {
      console.log(`Spam detected from IP: ${clientIP}`);
      return NextResponse.json({ 
        message: 'Potential spam detected',
        success: false 
      }, { status: 400, headers });
    }

    // Validate input data
    const validation = validateInput({ name, email, phone, company, message });
    if (!validation.isValid) {
      return NextResponse.json({ 
        message: validation.errors[0], // Return first error
        errors: validation.errors,
        success: false 
      }, { status: 400, headers });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      company: company ? sanitizeInput(company) : '',
      message: sanitizeInput(message)
    };

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json({ 
        message: 'Email service configuration error',
        success: false 
      }, { status: 500, headers });
    }

    // Generate unique message ID
    const messageId = `<${Date.now()}.${Buffer.from(sanitizedData.email).toString('base64')}@hello.pinclimb.com>`;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add connection timeout and retry options
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json({ 
        message: 'Email service temporarily unavailable',
        success: false 
      }, { status: 500, headers });
    }

    // Prepare email content
    const emailText = `
New Contact Form Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || 'Not provided'}
Company: ${sanitizedData.company || 'Not provided'}

Message:
${sanitizedData.message}

---
Submitted at: ${new Date().toISOString()}
Client IP: ${clientIP}
`.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .message { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #dc2626; }
        .footer { margin-top: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${sanitizedData.name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${sanitizedData.phone || 'Not provided'}</div>
            </div>
            <div class="field">
                <div class="label">Company:</div>
                <div class="value">${sanitizedData.company || 'Not provided'}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="message">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="footer">
                <p>Submitted: ${new Date().toLocaleString()}</p>
                <p>Client IP: ${clientIP}</p>
            </div>
        </div>
    </div>
</body>
</html>
`.trim();

    // Configure email options
    const mailOptions = {
      from: `"Pinclimb Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'contact@hello.pinclimb.com',
      replyTo: sanitizedData.email,
      subject: `New Contact: ${sanitizedData.name} - ${sanitizedData.company || 'Individual'}`,
      text: emailText,
      html: emailHtml,
      headers: {
        'Message-ID': messageId,
        'X-Mailer': 'Pinclimb Contact Form v1.0',
        'X-Priority': '3',
        'Return-Path': process.env.EMAIL_USER,
      },
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log(`Email sent successfully: ${info.messageId} from IP: ${clientIP}`);

    return NextResponse.json({ 
      message: 'Message sent successfully! We will get back to you within 2 hours.',
      success: true,
      messageId: info.messageId
    }, { status: 200, headers });

  } catch (error) {
    console.error('Error in contact form handler:', error);
    
    // Different error messages based on error type
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication failed. Please contact support.';
      } else if (error.message.includes('ECONNECTION')) {
        errorMessage = 'Unable to connect to email server. Please try again.';
      } else if (error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Request timed out. Please try again.';
      }
    }

    return NextResponse.json({ 
      message: errorMessage,
      success: false 
    }, { status: 500, headers });
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}