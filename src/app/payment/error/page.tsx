
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function PaymentError() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-8">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Payment Error!</strong>
        <span className="block sm:inline"> There was a problem processing your payment. Please try again later.</span>
      </div>
      <div className="mt-4">
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    </div>
  );
}