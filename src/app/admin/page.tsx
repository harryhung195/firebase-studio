'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function AdminPanel() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <p className="mb-4">Welcome to the admin panel. You can manage products and orders from here.</p>
      <div className="space-y-4">
        <Link href="/admin/products">
          <Button>Manage Products</Button>
        </Link>
        <Link href="/admin/orders">
          <Button>Manage Orders</Button>
        </Link>
      </div>
    </div>
  );
}

