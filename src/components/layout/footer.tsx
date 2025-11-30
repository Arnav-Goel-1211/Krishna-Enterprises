import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold mb-4">
              <Logo className="h-16 w-auto" />
              <span className="sr-only">Lorikeet Inks</span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Precision Inks for Perfect Prints.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
             <div className="flex gap-4">
               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Twitter className="h-6 w-6" />
                 <span className="sr-only">Twitter</span>
               </a>
               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Linkedin className="h-6 w-6" />
                 <span className="sr-only">LinkedIn</span>
               </a>
               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Github className="h-6 w-6" />
                 <span className="sr-only">GitHub</span>
               </a>
             </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lorikeet Inks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
