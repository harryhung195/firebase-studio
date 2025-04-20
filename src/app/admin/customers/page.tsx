'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminCustomers() {
  const customers = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "987-654-3210",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">List of Customers</h1>
      {customers.length === 0 ? (
        <p>No customers to display.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customers.map((customer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{customer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Email:</strong> {customer.email}
                </p>
                <p>
                  <strong>Phone:</strong> {customer.phoneNumber}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}


