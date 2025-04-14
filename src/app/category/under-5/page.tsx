'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const products = [
  {id: 1, name: 'Nail Polish - Red', sku: 'NP123', price: 4.99, attributes: {color: 'Red', size: '15ml'}},
  {id: 2, name: 'Nail Polish - Blue', sku: 'NP124', price: 3.99, attributes: {color: 'Blue', size: '15ml'}},
  {id: 3, name: 'Nail Polish - Green', sku: 'NP125', price: 2.99, attributes: {color: 'Green', size: '15ml'}},
  {id: 4, name: 'Nail Polish - Yellow', sku: 'NP126', price: 4.49, attributes: {color: 'Yellow', size: '15ml'}},
  {id: 5, name: 'Nail Polish - Pink', sku: 'NP127', price: 1.99, attributes: {color: 'Pink', size: '15ml'}},
];

export default function Under5() {
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
      <h1 className="text-2xl font-bold mb-4">Products Under $5</h1>

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
              <p>Size: {product.attributes.size}</p>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

