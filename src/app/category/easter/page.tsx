'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const products = [
  {id: 13, name: 'Pastel Nail Polish Set', sku: 'EST001', price: 7.99, attributes: {colors: 'Pink, Blue, Yellow', size: '3x10ml'}},
  {id: 14, name: 'Easter Egg Nail Stickers', sku: 'EST002', price: 3.49, attributes: {design: 'Easter Eggs', quantity: '20 stickers'}},
  {id: 15, name: 'Bunny Nail Charms', sku: 'EST003', price: 5.99, attributes: {material: 'Acrylic', quantity: '10 charms'}},
];

export default function Easter() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
   const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filtered = products.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.values(product.attributes).some((attr: any) =>
          String(attr).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: any) => {
    router.push('/shopping-cart');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Easter Nail Products</h1>

      <div className="mb-4">
        <Input
          type="search"
          placeholder="Search products by name, SKU, attributes..."
          value={search}
          onChange={handleSearch}
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>Price: ${product.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>SKU: {product.sku}</p>
              <p>Colors: {product.attributes.colors}</p>
              <p>Design: {product.attributes.design}</p>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
