import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { Recycle, TestTube2, Users } from 'lucide-react';

export const metadata = {
  title: "About Us - Lorikeet Inks",
  description: "Discover Lorikeet Inks: our history of innovation, our mission for a sustainable future, and the expert team driving our success.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white bg-gray-800">
        <Image
          src="https://picsum.photos/seed/chemistry/1600/600"
          alt="Abstract image representing innovation and chemistry"
          data-ai-hint="chemistry abstract"
          fill
          className="object-cover object-center absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 drop-shadow-lg">
            Pioneering the Future of Ink
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Our Mission: To lead the industry with high-performance, sustainable ink solutions through relentless innovation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Journey</h2>
              <p className="mt-4 text-muted-foreground">
                Since our inception in 2010, Lorikeet Inks has been on a mission to redefine the flexographic printing industry. We were born from the challenge to create water-based inks that offered world-class performance without ecological compromise.
              </p>
              <p className="mt-4 text-muted-foreground">
                What started in a single lab has blossomed into a nationwide network, serving as a trusted partner to corrugated converters. Our story is one of scientific curiosity, customer-centric innovation, and a profound commitment to environmental stewardship. We're proving that vibrant, durable packaging and a greener planet are not mutually exclusive—they're the future.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/lab/500/500"
                alt="Early photo of the Lorikeet Inks lab"
                data-ai-hint="old laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Core Pillars</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The foundational values that drive our business and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-3 rounded-full mb-2">
                  <TestTube2 className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We relentlessly pursue the next breakthrough, investing in R&D to develop smarter, more efficient ink technologies.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-3 rounded-full mb-2">
                   <Recycle className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our commitment is to a healthier planet, creating eco-conscious products that set new standards for the industry.</p>
              </CardContent>
            </Card>
             <Card className="text-center border-primary/20">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-3 rounded-full mb-2">
                   <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We build lasting relationships by acting as a true partner, offering tailored solutions and expert support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
