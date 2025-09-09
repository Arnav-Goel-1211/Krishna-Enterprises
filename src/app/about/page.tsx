import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { CheckCircle, Recycle, TestTube2, Users } from 'lucide-react';

export const metadata = {
  title: "About Us - Lorikeet Inks",
  description: "Learn about Lorikeet Inks' history, our commitment to quality and sustainability, and the team behind our innovative products.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white bg-gray-800">
        <Image
          src="https://picsum.photos/1600/600"
          alt="Abstract image representing innovation and chemistry"
          data-ai-hint="chemistry abstract"
          fill
          className="object-cover object-center absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 drop-shadow-lg">
            About Lorikeet Inks
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Our Commitment to Quality, Innovation, and a Sustainable Future.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2005, Lorikeet Inks emerged from a desire to revolutionize the flexographic printing industry. We saw a need for high-performance, water-based inks that didn't force a compromise between quality and environmental responsibility.
              </p>
              <p className="mt-4 text-muted-foreground">
                From our humble beginnings in a small lab, we've grown into a trusted partner for corrugated box manufacturers across the country. Our journey is one of continuous innovation, driven by a passion for color, a commitment to our clients, and a deep respect for our planet. We believe that vibrant packaging and a healthy environment can, and should, go hand-in-hand.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/500/500"
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-3 rounded-full mb-2">
                  <TestTube2 className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We continuously invest in R&D to push the boundaries of ink technology, delivering smarter and more efficient solutions.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-3 rounded-full mb-2">
                   <Recycle className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We are dedicated to creating products that are safe for people and the planet, minimizing our environmental footprint.</p>
              </CardContent>
            </Card>
             <Card className="text-center">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-3 rounded-full mb-2">
                   <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We work collaboratively with our clients, offering expert support to help them achieve their printing goals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-12">Meet the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                  <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint="professional headshot" />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
