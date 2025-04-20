'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

export default function Checkout() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postcode: '',
    cardNumber: '',
  });

  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + (item.price * (item.quantity || 1)), 0
    );
  }, [cart]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePayment = () => {
    const { name, address, postcode, cardNumber } = formData;

    if (!name || !address || !postcode || !cardNumber) {
        toast({
            title: "Error!",
            description: "Please fill in all fields before proceeding to payment."
        });
      return;
    }

    if (cart.length === 0) {
         toast({
            title: "Error!",
            description: "Your cart is empty. Add items before checking out."
        });
      router.push('/');
      return;
    }

    setLoading(true);
    // Simulating payment processing
    setTimeout(() => {
      setLoading(false);
      router.push('/payment/success');
    }, 1000);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

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
                  {product.sku && <p>SKU: {product.sku}</p>}
                  {product.attributes &&
                    Object.entries(product.attributes).map(([key, value]) => (
                      <p key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                      </p>
                    ))}
                   <div className="flex items-center space-x-2 mt-2">
                    <span>Qty: {product.quantity || 1}</span>
                    <span>Price: ${(product.price * (product.quantity || 1)).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Total Price Card */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
              <Card>
                <CardContent className="text-lg font-bold py-4">
                  Total Price: ${totalPrice.toFixed(2)}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Fields */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="postcode">Postcode</Label>
                  <Input
                    type="text"
                    id="postcode"
                    placeholder="Enter your postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    type="text"
                    id="cardNumber"
                    placeholder="Enter your card number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div className="col-span-full flex justify-between mt-6">
                  <Button variant="outline" onClick={() => router.push('/shopping-cart')}>
                    Back to Shopping Cart
                  </Button>
                  <Button onClick={handlePayment} disabled={loading}>
                    {loading ? 'Processing...' : 'Pay Now'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
