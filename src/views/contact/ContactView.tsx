import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo";

export const ContactView = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <ContactForm />
        </div>
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}