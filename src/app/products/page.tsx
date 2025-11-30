import Image from 'next/image';
import { Box, CupSoda, Pencil, Utensils, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: "Our Inks - Lorikeet Inks",
  description: "Explore our high-performance, water-based flexo inks, engineered for a wide variety of applications including corrugated boxes, paper cups, food packaging, and more.",
};

const specializedUses = [
  {
    title: "Corrugated Boxes",
    icon: <Box className="w-10 h-10 text-primary" />,
    imageUrl: "/home/user/studio/src/images/corrugatedboxes.jpg",
    dataAiHint: "printed boxes",
    description: "Our inks provide excellent adhesion and vibrant colors on all types of corrugated and kraft linerboards, perfect for shipping and retail packaging."
  },
  {
    title: "Paper Cups & Napkins",
    icon: <CupSoda className="w-10 h-10 text-primary" />,
    imageUrl: "https://picsum.photos/seed/papercups/500/350",
    dataAiHint: "printed cups",
    description: "Safe and compliant inks for single-use items, offering sharp prints and quick drying for high-speed converting lines."
  },
  {
    title: "Stationery",
    icon: <Pencil className="w-10 h-10 text-primary" />,
    imageUrl: "https://picsum.photos/seed/notebooks/500/350",
    dataAiHint: "printed stationery",
    description: "Achieve crisp, clean, and consistent color for notebooks, envelopes, and other paper-based stationery products."
  },
  {
    title: "Food Packaging",
    icon: <Utensils className="w-10 h-10 text-primary" />,
    imageUrl: "https://picsum.photos/seed/foodbox/500/350",
    dataAiHint: "food packaging",
    description: "Our food-grade compliant inks are formulated for safety and performance in indirect food contact applications like flexible packaging and labels."
  },
  {
    title: "Other Applications",
    icon: <FileText className="w-10 h-10 text-primary" />,
    imageUrl: "https://picsum.photos/seed/paperbags/500/350",
    dataAiHint: "shopping bag",
    description: "From gift wrap to paper bags and more, our versatile water-based inks are adaptable to a wide array of printing needs."
  }
];

export default function ProductsPage() {
  return (
    <div>
      <section className="py-12 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Waterbased Printing Inks</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete range of vibrant, sustainable, and high-performance solutions engineered for versatility and excellence.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Specialized Uses</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our water-based inks are formulated to deliver outstanding results across a diverse range of applications.
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
                            data-ai-hint={use.dataAiHint}
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
      </main>
    </div>
  );
}
