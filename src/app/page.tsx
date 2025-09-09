import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Box, Droplets, Leaf, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { products } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 5);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-gray-800">
        <Image
          src="https://picsum.photos/1600/900"
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
            Lorikeet Inks
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Vibrant, Sustainable Water-Based Flexo Inks for Modern Packaging.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/products">Explore Our Inks <ChevronRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Why Lorikeet Inks?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are committed to delivering excellence and sustainability in every drop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">Our water-based inks are designed to minimize environmental impact without compromising on quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Droplets className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Vibrant & Durable</h3>
              <p className="text-muted-foreground">Achieve brilliant, consistent colors that make your packaging stand out and withstand the rigors of shipping.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Unmatched Quality</h3>
              <p className="text-muted-foreground">Rigorous quality control ensures every batch of ink meets the highest industry standards for performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Featured Products</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our top-selling inks, trusted by leaders in the corrugated box industry.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col group overflow-hidden">
                      <CardHeader>
                        <div className="relative aspect-video rounded-md overflow-hidden">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            data-ai-hint="ink bottle"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <h3 className="text-lg font-headline font-semibold">{product.name}</h3>
                        <p className="text-muted-foreground mt-2 text-sm flex-grow">{product.description}</p>
                        <Button asChild variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Link href={`/products`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
      
      <section id="about-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/600/600"
                  alt="Lorikeet Inks manufacturing facility"
                  data-ai-hint="factory team"
                  fill
                  className="object-cover"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Innovating Ink Since 2005</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Lorikeet Inks was founded with a simple mission: to provide the corrugated packaging industry with superior, sustainable, and reliable water-based flexo inks. We combine decades of expertise with cutting-edge technology to create products that not only look good but also do good for the planet.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/about">Learn More About Us <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline font-bold">Ready to Elevate Your Packaging?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Let's discuss your specific needs and find the perfect ink solution for you.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
