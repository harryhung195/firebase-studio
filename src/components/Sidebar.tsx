'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link href="/admin/orders">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Manage Orders</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/users">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Manage Users</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/settings">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Settings</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/revenue">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Revenue Tracking</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/technicians">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Technician Management</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/calendar">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Calendar View</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/customers">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Customer Info</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/notifications">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">Notifications Panel</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}