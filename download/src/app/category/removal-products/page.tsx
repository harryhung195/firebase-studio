'use client';

import {useState, useEffect} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const products = [
  {id: 19, name: 'Acrylic Nail Remover - 500ml', sku: 'ARP001', price: 14.99, attributes: {size: '500ml', type: 'Liquid'}},
  {id: 20, name: 'Gel Nail Polish Remover Wraps', sku: 'GRP002', price: 9.49, attributes: {quantity: '100 wraps', type: 'Wraps'}},
  {id: 21, name: 'Cuticle Pusher and Remover Kit', sku: 'CPR003', price: 7.49, attributes: {tools: 'Pusher, Nipper', material: 'Stainless Steel'}},
];

export default function RemovalProducts() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
   const router = useRouter();
    const [cart, setCart] = useState<any[]>([]);

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

  const handleAddToCart = (product: any) =>
    // Add the selected product to the cart
    setCart([...cart, product]);
  };


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Acrylic &amp; Gel Removal Products</h1>

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
              <p>Size: {product.attributes.size}</p>
              <p>Type: {product.attributes.type}</p>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
         <Button onClick={() => router.push('/shopping-cart')}>Go to Shopping Cart</Button>
      </div>
    </div>
  );
}
