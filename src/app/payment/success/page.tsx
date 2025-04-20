'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function PaymentSuccess() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Load order details from localStorage
    const storedOrderDetails = localStorage.getItem('orderDetails');
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    } else {
      // If no order details are found, redirect to home
      router.push('/');
    }

    // Clear localStorage after displaying order details
    localStorage.removeItem('orderDetails');

    // Optionally, delay the redirection slightly to ensure the removal is processed
    const timeoutId = setTimeout(() => {
      //router.push('/');
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [router]);

  if (!orderDetails) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">No Order Found!</strong>
          <span className="block sm:inline"> No order details found. Redirecting to home...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Payment Successful!</strong>
        <span className="block sm:inline"> Your payment has been processed successfully.</span>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Order Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orderDetails.cartItems.map((product, index) => (
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

      <div className="mt-4">
        <p><strong>User ID:</strong> {orderDetails.userId}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Total Amount:</strong> ${orderDetails.amount.toFixed(2)}</p>
        <p><strong>Payment ID:</strong> {orderDetails.paymentId}</p>
        <p><strong>Order Status:</strong> {orderDetails.status}</p>
      </div>

      <div className="mt-4">
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    </div>
  );
}
