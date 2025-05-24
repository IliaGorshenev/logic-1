import { subtitle, title } from '@/components/primitives';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ContactSection from '@/components/sections/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import HeroSection from '@/components/sections/HeroSection';
import PricingSection from '@/components/sections/PricingSection';
import ProgramSection from '@/components/sections/ProgramSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import TeacherSection from '@/components/sections/TeacherSection';
import { button as buttonStyles } from '@heroui/theme';

export default function Home() {
  // Pre-compute button styles for HeroSection
  const buttonPrimaryClass = buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' });
  const buttonSecondaryClass = buttonStyles({ variant: 'bordered', radius: 'full' });
  
  // Additional button style for PricingSection
  const buttonFlatClass = buttonStyles({ color: 'primary', variant: 'flat', radius: 'full' });

  // Pre-compute title and subtitle classes
  const titleClass = title();
  const subtitleClass = subtitle();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection title={titleClass} subtitle={subtitleClass} buttonPrimaryClass={buttonPrimaryClass} buttonSecondaryClass={buttonSecondaryClass} />
      <TeacherSection />
      <AdvantagesSection />
      <ProgramSection />
      <ReviewsSection />
      <PricingSection 
        buttonPrimaryClass={buttonPrimaryClass} 
        buttonSecondaryClass={buttonSecondaryClass} 
        buttonFlatClass={buttonFlatClass} 
      />
      <ContactSection buttonStyles={buttonStyles} />
      <FaqSection />
    </section>
  );
}
