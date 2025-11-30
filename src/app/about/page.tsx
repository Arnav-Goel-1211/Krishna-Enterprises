import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { Award, Target, Users, TrendingUp, Sparkles, Handshake } from 'lucide-react';

export const metadata = {
  title: "About Us - Lorikeet Inks",
  description: "Discover Lorikeet Inks: our history of innovation, our mission for a sustainable future, and the expert team driving our success.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative w-full h-[30vh] flex items-center justify-center text-center text-white bg-gray-800">
        <Image
          src="https://picsum.photos/seed/chemistry/1600/500"
          alt="Abstract image representing innovation and chemistry"
          data-ai-hint="chemistry abstract"
          fill
          className="object-cover object-center absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight drop-shadow-lg">
            About Lorikeet Inks
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/factory/600/450"
                alt="Modern manufacturing facility"
                data-ai-hint="modern factory"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Who We Are</h2>
              <p className="mt-4 text-muted-foreground">
                Since 2005, Lorikeet Inks has emerged as a leading manufacturer of high-quality, water-based flexographic inks for the corrugated packaging industry. We are dedicated to delivering innovative and sustainable ink solutions that meet the evolving demands of our customers and the environment.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our journey is driven by a passion for excellence and a commitment to research and development. We combine advanced technology with deep industry expertise to create products that not only provide superior print quality but also enhance operational efficiency for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-background p-8 rounded-lg">
              <div className="flex items-center gap-4">
                <Target className="w-10 h-10 text-primary"/>
                <h2 className="text-3xl font-headline font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                To be the leading provider of innovative, sustainable, and high-performance ink solutions for the flexographic printing industry. We strive to empower our customers with exceptional products and unparalleled technical support, fostering long-term partnerships built on trust and mutual success.
              </p>
            </div>
             <div className="bg-background p-8 rounded-lg">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-10 h-10 text-accent"/>
                <h2 className="text-3xl font-headline font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                To create a future where vibrant printing and environmental responsibility go hand-in-hand. We envision a world where our eco-conscious technologies set new industry standards, driving a global shift towards a greener, more sustainable printing ecosystem for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our dedication to excellence sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-full mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Quality</h3>
              <p className="text-muted-foreground">We deliver inks with consistent, reliable, and superior performance.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground">Our R&D team continuously develops next-generation ink technologies.</p>
            </div>
             <div className="text-center flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-full mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground">Your success is our priority, backed by expert support.</p>
            </div>
             <div className="text-center flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-full mb-4">
                <Handshake className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Partnership</h3>
              <p className="text-muted-foreground">We build lasting relationships through collaboration and trust.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
