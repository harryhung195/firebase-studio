'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const products = [
  {id: 6, name: 'Nail Polish - Gold', sku: 'NP128', price: 9.99, attributes: {color: 'Gold', size: '15ml'}},
  {id: 7, name: 'Nail Polish - Silver', sku: 'NP129', price: 8.99, attributes: {color: 'Silver', size: '15ml'}},
    {id: 8, name: 'Nail Polish Set', sku: 'NP130', price: 7.99, attributes: {colors: 'Red, Blue, Green', size: '3x5ml'}},
  {id: 9, name: 'Nail Art Kit', sku: 'NAK001', price: 6.49, attributes: {tools: 'Brushes, Stickers, Rhinestones'}},
];

export default function Under10() {
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
      <h1 className="text-2xl font-bold mb-4">Products Under $10</h1>

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
              <p>Color: {product.attributes.color}</p>
              <p>Size: {product.attributes.size}</p>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
