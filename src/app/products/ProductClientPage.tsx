"use client";

import { useState, useMemo } from 'react';
import type { products, filterOptions } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Product = (typeof products)[0];
type FilterOptions = typeof filterOptions;

interface ProductClientPageProps {
  allProducts: Product[];
  filterOptions: FilterOptions;
}

function ProductCard({ product }: { product: Product }) {
  const [hoveredColor, setHoveredColor] = useState(product.colors[0] || '#E0F7FA');

  return (
    <Card 
      className="flex flex-col h-full overflow-hidden transition-all duration-300" 
      style={{ borderColor: hoveredColor, borderWidth: '2px' }}
      onMouseLeave={() => setHoveredColor(product.colors[0] || '#E0F7FA')}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={product.imageUrl}
            alt={product.name}
            data-ai-hint="ink bottle product"
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline">{product.name}</CardTitle>
        <p className="text-muted-foreground mt-2 text-sm">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start">
        <div className="font-semibold text-sm mb-2">Available Colors:</div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="h-6 w-6 rounded-full border-2 cursor-pointer transition-transform hover:scale-125"
              style={{ backgroundColor: color }}
              onMouseEnter={() => setHoveredColor(color)}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default function ProductClientPage({ allProducts, filterOptions }: ProductClientPageProps) {
  const [filters, setFilters] = useState<{ applications: string[]; properties: string[] }>({
    applications: [],
    properties: [],
  });

  const handleFilterChange = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const newValues = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newValues };
    });
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const applicationMatch =
        filters.applications.length === 0 ||
        filters.applications.some((app) => product.applications.includes(app));
      const propertyMatch =
        filters.properties.length === 0 ||
        filters.properties.some((prop) => product.properties.includes(prop));
      return applicationMatch && propertyMatch;
    });
  }, [allProducts, filters]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={['applications', 'properties']} className="w-full">
              <AccordionItem value="applications">
                <AccordionTrigger className="font-semibold">Applications</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {filterOptions.applications.map((app) => (
                      <div key={app} className="flex items-center space-x-2">
                        <Checkbox id={`app-${app}`} onCheckedChange={() => handleFilterChange('applications', app)} />
                        <Label htmlFor={`app-${app}`} className="font-normal text-sm">{app}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="properties">
                <AccordionTrigger className="font-semibold">Properties</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {filterOptions.properties.map((prop) => (
                      <div key={prop} className="flex items-center space-x-2">
                        <Checkbox id={`prop-${prop}`} onCheckedChange={() => handleFilterChange('properties', prop)} />
                        <Label htmlFor={`prop-${prop}`} className="font-normal text-sm">{prop}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </aside>

      <div className="lg:col-span-3">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 border rounded-lg">
            <h3 className="text-xl font-semibold">No products found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
