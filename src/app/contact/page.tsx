import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: "Contact Us - Lorikeet Inks",
  description: "Get in touch with Lorikeet Inks for inquiries, custom orders, or feedback. We're here to help.",
};

export default function ContactPage() {
  return (
    <div>
       <section className="py-12 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our products, a custom order request, or need technical support, our team is ready to assist.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-headline font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-headline font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Address</h3>
                      <p className="text-muted-foreground">123 Inkwell Lane, Print City, PC 54321, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                       <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a href="mailto:info@lorikeetinks.com" className="text-muted-foreground hover:text-primary transition-colors">info@lorikeetinks.com</a>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                       <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
