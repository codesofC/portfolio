
import { contacts } from "@/constants/index";
import ContactCard from "./ContactCard";
import Section from "./Section";

const Contact = () => {
  return (
    <Section className="flex flex-col gap-6" id="contacts">
      <h1 className="font-bold text-2xl font-mono"> Contacts </h1>
      <div className="flex flex-col gap-3">
        <h4 className="text-muted-foreground text-lg"> It would be a pleasure to work with you. </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
