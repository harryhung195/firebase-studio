'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminNotifications() {
  const notifications = [
    {
      title: "New Order Received",
      content: "You have received a new order with order ID #12345.",
    },
    {
      title: "Low Stock Alert",
      content: "The stock for product 'Nail Polish Red' is running low. Please restock soon.",
    },
    {
      title: "Payment Confirmation",
      content: "Payment for order #67890 has been successfully processed.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">List of Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications to display.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notifications.map((notification, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{notification.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{notification.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

