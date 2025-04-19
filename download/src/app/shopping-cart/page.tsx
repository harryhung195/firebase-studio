'use client';

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function ShoppingCart() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCartInLocalStorage = (updatedCart: any[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (productId: number) => {
    // Remove the item from the cart
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    updateCartInLocalStorage(updatedCart);
  };

  const incrementQuantity = (productId: number) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? {...item, quantity: (item.quantity || 1) + 1} : item
    );
    setCart(updatedCart);
    updateCartInLocalStorage(updatedCart);
  };

  const decrementQuantity = (productId: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        const newQuantity = (item.quantity || 1) - 1;
        return {...item, quantity: newQuantity > 0 ? newQuantity : 1}; // Ensure quantity doesn't go below 1
      }
      return item;
    });
    setCart(updatedCart);
    updateCartInLocalStorage(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const totalPrice = calculateTotalPrice();


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <div>
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
                    <Button size="sm" onClick={() => decrementQuantity(product.id)}>-</Button>
                    <span>Quantity: {product.quantity || 1}</span>
                    <Button size="sm" onClick={() => incrementQuantity(product.id)}>+</Button>
                  </div>
                  <Button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</Button>
                   <Button onClick={() => router.push('/checkout')}>Checkout</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 text-xl font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
          <Button onClick={() => router.push('/checkout')}>Checkout</Button>
        </div>
      )}
    </div>
  );
}

