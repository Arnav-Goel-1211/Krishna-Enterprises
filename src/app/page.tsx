
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Box, Droplets, Leaf, ChevronRight, CupSoda, Pencil } from 'lucide-react';
import CorrugatedBoxesImg from '@/images/corrugatedboxes.jpg';
import PaperCupsImg from '@/images/papercups.jpg';
import StationeryImg from '@/images/stationery.jpg';


const specializedUses = [
    {
    title: "Paper Cups & Napkins",
    icon: <CupSoda className="w-10 h-10 text-primary" />,
    imageUrl: PaperCupsImg,
    dataAiHint: "paper cups",
    description: "Safe and compliant inks for single-use items, offering sharp prints and quick drying for high-speed converting lines."
  },
  {
    title: "Corrugated Boxes",
    icon: <Box className="w-10 h-10 text-primary" />,
    imageUrl: CorrugatedBoxesImg,
    dataAiHint: "shipping boxes",
    description: "Our inks provide excellent adhesion and vibrant colors on all types of corrugated and kraft linerboards, perfect for shipping and retail packaging."
  },
  {
    title: "Stationery",
    icon: <Pencil className="w-10 h-10 text-primary" />,
    imageUrl: StationeryImg,
    dataAiHint: "printed journals",
    description: "Achieve crisp, clean, and consistent color for notebooks, envelopes, and other paper-based stationery products."
  },
];


export default function Home() {

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-gray-800">
        <Image
          src="https://picsum.photos/seed/inksplash/1600/900"
          alt="Colorful ink splashes on corrugated boxes"
          data-ai-hint="ink box"
          fill
          className="object-cover object-center absolute inset-0"
          style={{ zIndex: 0 }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 drop-shadow-lg">
            Precision Inks for Perfect Prints
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Experience the future of printing with Lorikeet Inks—where innovation, sustainability, and vibrant color converge.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/products">Discover Our Solutions <ChevronRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">The Lorikeet Advantage</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Engineered for performance, designed for the planet. See what sets our inks apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Sustainable Innovation</h3>
              <p className="text-muted-foreground">Our water-based formulas reduce environmental impact while delivering exceptional print quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Droplets className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Brilliant Performance</h3>
              <p className="text-muted-foreground">Achieve stunningly vibrant and durable colors that make your packaging pop and endure any condition.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Reliability & Consistency</h3>
              <p className="text-muted-foreground">Rely on our rigorously tested inks for consistent, high-quality results on every single print run.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="specialized-uses" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Ink Applications</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Engineered for excellence across a diverse range of materials and industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedUses.map((use, index) => (
              <Card key={index} className="flex flex-col group overflow-hidden">
                  <CardHeader className="p-0">
                      <div className="relative aspect-[5/3.5] overflow-hidden">
                          <Image
                              src={use.imageUrl}
                              alt={use.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                          {use.icon}
                          <CardTitle className="text-2xl font-headline">{use.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{use.description}</p>
                  </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products">See All Applications <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="about-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/seed/factory/600/600"
                  alt="Lorikeet Inks manufacturing facility"
                  data-ai-hint="factory team"
                  fill
                  className="object-cover"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">The Forefront of Ink Technology</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                For over 20 years, Lorikeet Inks has been a pioneer in water-based flexo ink solutions. We blend cutting-edge R&D with a steadfast commitment to sustainability, creating products that empower our clients and protect our planet.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/about">Our Story & Mission<ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline font-bold">Ready to Revolutionize Your Printing?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Connect with our ink specialists to discover the ideal solution for your needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

    