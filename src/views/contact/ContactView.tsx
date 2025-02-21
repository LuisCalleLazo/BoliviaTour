
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo";

export const ContactView = () =>
{

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}