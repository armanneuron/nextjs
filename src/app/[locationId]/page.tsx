import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LocationHero } from '@/components/LocationHero';
import { ContactForm } from '@/components/ContactForm';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { getLocationById, getAllLocationIds } from '@/lib/locations';
import { generateLocationSEO } from '@/lib/seo';

interface LocationPageProps {
  params: {
    locationId: string;
  };
}

// Generate static params for all locations
export async function generateStaticParams() {
  const locationIds = getAllLocationIds();
  return locationIds.map(id => ({ locationId: id }));
}

// Generate metadata for each location page
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationById(params.locationId);
  
  if (!location) {
    return {
      title: 'Location Not Found | PinClimb',
      description: 'The requested location page could not be found.'
    };
  }
  
  const seo = generateLocationSEO(location);
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: seo.openGraph.url,
      type: seo.openGraph.type,
      images: [{ url: seo.openGraph.image }],
    }
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationById(params.locationId);
  
  if (!location) {
    notFound();
  }
  
  return (
    <main>
      <LocationHero location={location} />
      <ContactForm location={location} />
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message={`Hi! I'm interested in your Pinterest marketing services for my business in ${location.name}. Can you help me?`}
      />
    </main>
  );
}