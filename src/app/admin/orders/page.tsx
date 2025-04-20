'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  { id: 1, customer: 'John Doe', date: '2024-08-01', total: 49.99, status: 'Shipped' },
  { id: 2, customer: 'Jane Smith', date: '2024-08-05', total: 25.50, status: 'Pending' },
  { id: 3, customer: 'David Lee', date: '2024-08-10', total: 75.00, status: 'Delivered' },
];

export default function AdminOrders() {
  const [orderList, setOrderList] = useState(orders);
  const [editOrderId, setEditOrderId] = useState<number | null>(null);
  const [editedOrder, setEditedOrder] = useState<{
    id: number;
    customer: string;
    date: string;
    total: number;
    status: string;
  } | null>(null);

  const handleEdit = (id: number) => {
    const orderToEdit = orderList.find(order => order.id === id);
    if (orderToEdit) {
      setEditOrderId(id);
      setEditedOrder({ ...orderToEdit });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (editedOrder) {
      setEditedOrder({ ...editedOrder, [field]: e.target.value });
    }
  };

  const handleSave = () => {
    if (editedOrder) {
      const updatedOrders = orderList.map(order =>
        order.id === editedOrder.id ? editedOrder : order
      );
      setOrderList(updatedOrders);
      setEditOrderId(null);
      setEditedOrder(null);
    }
  };

  const handleDelete = (id: number) => {
    const updatedOrders = orderList.filter(order => order.id !== id);
    setOrderList(updatedOrders);
    setEditOrderId(null);
    setEditedOrder(null);
  };

  const handleCancel = () => {
    setEditOrderId(null);
    setEditedOrder(null);
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
              {editOrderId === order.id && editedOrder ? (
                <>
                  <TableCell>
                    <input
                      type="text"
                      value={editedOrder.customer}
                      onChange={(e) => handleInputChange(e, 'customer')}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      type="date"
                      value={editedOrder.date}
                      onChange={(e) => handleInputChange(e, 'date')}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      type="number"
                      value={editedOrder.total}
                      onChange={(e) => handleInputChange(e, 'total')}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </TableCell>
                  <TableCell>
                    <select
                      value={editedOrder.status}
                      onChange={(e) => handleInputChange(e, 'status')}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" onClick={handleSave}>
                      Save
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" onClick={() => handleEdit(order.id)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(order.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
