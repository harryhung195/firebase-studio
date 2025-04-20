'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { createPaymentIntent } from '@/services/stripe-service';
import { toast } from '@/hooks/use-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
  const [cart, setCart] = useState<any[]>([]);
  const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postcode: '',
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

  useEffect(() => {
    // Fetch client secret on component mount
    const fetchClientSecret = async () => {
      setLoading(true);
      try {
        const clientSecret = await createPaymentIntent(totalPrice);
        setStripeClientSecret(clientSecret);
      } catch (error: any) {
        console.error("Failed to fetch client secret:", error);
        toast({
          title: "Payment Error!",
          description: "Failed to initiate payment process: " + error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    if (totalPrice > 0) {
      fetchClientSecret();
    }
  }, [totalPrice]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret: stripeClientSecret,
    appearance,
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
          </div>

          {/* Payment Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p>Loading payment interface...</p>
              ) : stripeClientSecret && stripePromise ? (
                <Elements stripe={stripePromise} options={options}>
                  <PaymentSection
                    formData={formData}
                    totalPrice={totalPrice}
                    handleChange={handleChange}
                  />
                </Elements>
              ) : (
                <p>Payment interface unavailable.</p>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

interface PaymentSectionProps {
  formData: { name: string; address: string; postcode: string };
  totalPrice: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  formData,
  totalPrice,
  handleChange,
}) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handlePayment = async () => {
    const { name, address, postcode } = formData;

    if (!name || !address || !postcode) {
      toast({
        title: "Error!",
        description: "Please fill in all shipping information fields.",
        variant: "destructive",
      });
      return;
    }

    if (!stripe || !elements) {
      toast({
        title: "Payment Unavailable",
        description: "Stripe could not be loaded. Please try again in a few minutes.",
        variant: "destructive",
      });
      return;
    }

    if (totalPrice === 0) {
      toast({
        title: "Error!",
        description: "Your cart is empty. Add items before checking out.",
        variant: "destructive",
      });
      router.push('/');
      return;
    }

    setPaymentLoading(true);

    try {
      const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
          payment_method_data: {
            billing_details: {
              name: formData.name,
              address: {
                line1: formData.address,
                postal_code: formData.postcode,
              },
            },
          },
        },
      });

      if (error) {
        console.error("Payment failed:", error);
        toast({
          title: "Payment Failed",
          description: error.message || "Please select a payment method to pay with.",
          variant: "destructive",
        });
        router.push('/payment/error');
      } else {
        // Payment has succeeded
        localStorage.removeItem('cart');
        router.push('/payment/success');
      }
    } catch (apiError: any) {
      console.error("API error during payment:", apiError);
      toast({
        title: "Payment Error",
        description: apiError.message || "Failed to connect to the payment gateway.",
        variant: "destructive",
      });
      router.push('/payment/error');
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <Label htmlFor="postcode">Postcode</Label>
        <input
          type="text"
          id="postcode"
          placeholder="Enter your postcode"
          value={formData.postcode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="payment">Payment Details</Label>
        <div className="mt-2">
          <PaymentElement id="payment" />
        </div>
      </div>

      <div className="col-span-full flex justify-between mt-6">
        <Button variant="outline" onClick={() => router.push('/shopping-cart')}>
          Back to Shopping Cart
        </Button>
        <Button onClick={handlePayment} disabled={paymentLoading || !stripe || !elements}>
          {paymentLoading ? 'Processing...' : 'Pay Now'}
        </Button>
      </div>
    </div>
  );
};
