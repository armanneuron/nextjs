import { MainHero } from '@/components/MainHero';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <MainHero />
      <ContactForm />
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest marketing services. Can you help me grow my business on Pinterest?"
      />
    </main>
  );
}