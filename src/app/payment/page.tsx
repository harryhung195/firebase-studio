'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Payment() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the error page immediately after mounting
    router.push('/payment/error');
  }, [router]);

  return null; // This component doesn't render anything
}
