'use client';

import {useState, useEffect} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const products = [
  {id: 22, name: 'Acrylic Powder - Clear', sku: 'ALP001', price: 19.99, attributes: {color: 'Clear', size: '100g'}},
  {id: 23, name: 'Acrylic Liquid Monomer', sku: 'ALM002', price: 15.49, attributes: {size: '120ml', odor: 'Low Odor'}},
  {id: 24, name: 'Acrylic Brush Set', sku: 'ABS003', price: 24.99, attributes: {brushes: '3 brushes', material: 'Kolinsky Hair'}},
];

export default function AcrylicLiquidsPowders() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever the cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
    // Add the selected product to the cart
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Acrylic Liquids &amp; Powders</h1>

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
         <Button onClick={() => router.push('/shopping-cart')}>Go to Shopping Cart</Button>
      </div>
    </div>
  );
}


