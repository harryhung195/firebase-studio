'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const revenueData = [
  {id: 1, date: '2024-08-01', description: 'Gel Manicure', technician: 'Jane Doe', amount: 45.00},
  {id: 2, date: '2024-08-01', description: 'Pedicure', technician: 'John Smith', amount: 60.00},
  {id: 3, date: '2024-08-02', description: 'Acrylic Nails', technician: 'Jane Doe', amount: 75.00},
  {id: 4, date: '2024-08-02', description: 'Nail Art', technician: 'Emily White', amount: 50.00},
];

export default function AdminRevenue() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Revenue Tracking</h1>
      <p className="mb-4">This page shows how much money your nail salon has made over time. It helps you:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Track sales trends 📈</li>
        <li>See which services bring in the most revenue 💅</li>
        <li>Know how each technician is performing 👩‍🔧</li>
        <li>Identify best days/weeks/months for the business</li>
      </ul>

      <Table>
        <TableCaption>A list of recent transactions in your business.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {revenueData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.technician}</TableCell>
              <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
