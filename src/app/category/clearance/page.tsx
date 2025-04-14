'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const products = [
  {id: 10, name: 'Nail Polish - Discounted Red', sku: 'CLR001', price: 2.49, attributes: {color: 'Red', size: '10ml'}},
  {id: 11, name: 'Nail File Set', sku: 'CLR002', price: 4.99, attributes: {type: 'Assorted Grit', quantity: '5 files'}},
  {id: 12, name: 'Toe Separators', sku: 'CLR003', price: 1.99, attributes: {material: 'Foam', quantity: '2 pieces'}},
];

export default function Clearance() {
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
      <h1 className="text-2xl font-bold mb-4">Clearance Sale</h1>

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
              <img
                src={`https://picsum.photos/200/150?random=${product.id}`}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <p>SKU: {product.sku}</p>
              <p>Color: {product.attributes.color}</p>
              <p>Type: {product.attributes.type}</p>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
