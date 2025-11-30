import Link from "next/link";
import { Logo } from "@/components/logo";

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
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold mb-4">
              <Logo className="h-16 w-auto" />
              <span className="sr-only">Lorikeet Inks</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Precision Inks for Perfect Prints.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lorikeet Inks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
