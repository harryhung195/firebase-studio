'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function AdminPanel() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <p className="mb-4">Welcome to the admin panel. You can manage appointments/orders, users and settings from here.</p>
      <div className="space-y-4">
        <Link href="/admin/orders">
          <Button>Manage Appointments/Orders</Button>
        </Link>
        <Link href="/admin/users">
          <Button>Manage Users</Button>
        </Link>
        <Link href="/admin/settings">
            <Button>Settings</Button>
          </Link>
          <Link href="/admin/revenue">
            <Button>Revenue Tracking</Button>
          </Link>
          <Link href="/admin/technicians">
            <Button>Technician Management</Button>
          </Link>
          <Link href="/admin/calendar">
            <Button>Calendar View</Button>
          </Link>
          <Link href="/admin/customers">
            <Button>Customer Info</Button>
          </Link>
          <Link href="/admin/notifications">
            <Button>Notifications Panel</Button>
          </Link>
      </div>
    </div>
  );
}
