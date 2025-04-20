'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  {id: 1, customer: 'John Doe', date: '2024-08-01', total: 49.99, status: 'Shipped'},
  {id: 2, customer: 'Jane Smith', date: '2024-08-05', total: 25.50, status: 'Pending'},
  {id: 3, customer: 'David Lee', date: '2024-08-10', total: 75.00, status: 'Delivered'},
];

export default function AdminOrders() {
  const [orderList, setOrderList] = useState(orders);

  const handleDelete = (id: number) => {
    const updatedOrders = orderList.filter(order => order.id !== id);
    setOrderList(updatedOrders);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>

       <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderList.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">
                 <Button size="sm">Edit</Button>
                 <Button variant="destructive" size="sm" onClick={() => handleDelete(order.id)}>
                   Delete
                 </Button>
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

