'use client';

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function ShoppingCart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    // Remove the item from the cart
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((product, index) => (
            <Card key={product.id || index}>
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
                <Button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

