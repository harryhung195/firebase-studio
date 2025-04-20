'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Clear the cart on successful payment
    localStorage.removeItem('cart');

    // Optionally, delay the redirection slightly to ensure the removal is processed
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [router]);

  return (
    <div className="container mx-auto py-8">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Payment Successful!</strong>
        <span className="block sm:inline"> Your payment has been processed successfully.</span>
      </div>
      <div className="mt-4">
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    </div>
  );
}
