
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function PaymentSuccess() {
  const router = useRouter();

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