import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { subtitle, title } from '@/components/primitives';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import HeroSection from '@/components/sections/HeroSection';
import ProgramSection from '@/components/sections/ProgramSection';
import TeacherSection from '@/components/sections/TeacherSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import PricingSection from '@/components/sections/PricingSection';
 
export default function Home() {
  // Pre-compute button styles for HeroSection
  const buttonPrimaryClass = buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' });
  const buttonSecondaryClass = buttonStyles({ variant: 'bordered', radius: 'full' });
  
  // Pre-compute title and subtitle classes
  const titleClass = title();
  const subtitleClass = subtitle();
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection 
        title={titleClass} 
        subtitle={subtitleClass} 
        buttonPrimaryClass={buttonPrimaryClass}
        buttonSecondaryClass={buttonSecondaryClass}
      />
      <TeacherSection />
      <AdvantagesSection />
      <ProgramSection />
      <ReviewsSection />
      <PricingSection buttonStyles={buttonStyles} />
      <ContactSection buttonStyles={buttonStyles} />
      <FaqSection />
    </section>
  );
}
