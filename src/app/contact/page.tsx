import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: "Contact Us - Lorikeet Inks",
  description: "Connect with the Lorikeet Inks team for expert consultations, technical support, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div>
       <section className="py-12 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Connect With Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a question, a project, or a challenge? We're here to provide solutions. Reach out to our team of ink specialists today.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 lg:row-start-1">
              <div className="bg-card p-8 rounded-lg shadow-md border">
                <h2 className="text-3xl font-headline font-bold mb-6">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Manufacturing Units</h3>
                      <p className="text-muted-foreground">Ladwa, DIstt. Kurukshetra, Haryana -136132</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">General Inquiries</h3>
                      <a href="mailto:kre2811@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">kre2811@gmail.com</a>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Contact Number</h3>
                      <a href="tel:9255392811" className="text-muted-foreground hover:text-primary transition-colors">9255392811</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="lg:col-span-3">
              <h2 className="text-3xl font-headline font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
