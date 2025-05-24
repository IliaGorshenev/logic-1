import ContactForm from "./ContactForm";


interface ContactSectionProps {
  buttonStyles: (props?: any) => string;
}

export default function ContactSection({ buttonStyles }: ContactSectionProps) {
  return (
    <div id="contact" className="container px-4 md:px-6 py-12 mt-8">
      <h2 className="text-2xl font-bold text-center mb-8">Записаться на занятие</h2>
      <div className="max-w-md mx-auto">
        <ContactForm buttonStyles={buttonStyles} />
      </div>
    </div>
  );
}
