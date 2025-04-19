'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderList.map(order => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>Order #{order.id}</CardTitle>
              <CardDescription>Customer: {order.customer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total}</p>
              <p>Status: {order.status}</p>
              <div className="flex justify-between mt-4">
                <Button size="sm">Edit</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(order.id)}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
