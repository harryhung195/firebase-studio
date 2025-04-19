'use client';

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import {Input} from '@/components/ui/input';

export default function Checkout() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Summary of Items:</h2>
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
                  {product.attributes.color && <p>Color: {product.attributes.color}</p>}
                  {product.attributes.size && <p>Size: {product.attributes.size}</p>}
                  {product.attributes.type && <p>Type: {product.attributes.type}</p>}
                  {product.attributes.colors && <p>Colors: {product.attributes.colors}</p>}
                  {product.attributes.design && <p>Design: {product.attributes.design}</p>}
                  {product.attributes.power && <p>Power: {product.attributes.power}</p>}
                  {product.attributes.speed && <p>Speed: {product.attributes.speed}</p>}
                  {product.attributes.brushes && <p>Brushes: {product.attributes.brushes}</p>}
                  {product.attributes.material && <p>Material: {product.attributes.material}</p>}
                  {product.attributes.odor && <p>Odor: {product.attributes.odor}</p>}
                  {product.attributes.quantity && <p>Quantity: {product.attributes.quantity}</p>}
                  {product.attributes.tools && <p>Tools: {product.attributes.tools}</p>}
                   <div className="flex items-center space-x-2 mb-4">
                    <span>Quantity: {product.quantity || 1}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
             <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
              <Card>
                <CardContent className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</CardContent>
              </Card>
            </div>
          </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input type="text" id="name" placeholder="Enter your name" className="mt-1" />
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <Input type="text" id="address" placeholder="Enter your address" className="mt-1" />
            </div>

            <div className="mb-4">
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postcode</label>
                <Input type="text" id="postcode" placeholder="Enter your postcode" className="mt-1" />
            </div>

            <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <Input type="text" id="cardNumber" placeholder="Enter your card number" className="mt-1" />
            </div>

           <div className="flex justify-between mt-4">
            <Button onClick={() => router.push('/shopping-cart')}>Back to Shopping Cart</Button>
            <Button  onClick={() => router.push('/payment')}>Pay Now</Button>
          </div>
        </div>
      )}
    </div>
  );
}
