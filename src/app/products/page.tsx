import { products, filterOptions } from "@/lib/data";
import ProductClientPage from "./ProductClientPage";

export const metadata = {
  title: "Our Inks - Lorikeet Inks",
  description: "Explore our full range of high-quality water-based flexo inks for corrugated packaging.",
};

export default function ProductsPage() {
  return (
    <div>
      <section className="py-12 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Our Ink Collection</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find the perfect ink for your application. High-performance, sustainable, and vibrant solutions for all your printing needs.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <ProductClientPage allProducts={products} filterOptions={filterOptions} />
      </main>
    </div>
  );
}
