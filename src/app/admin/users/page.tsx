'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const users = [
  {id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Customer'},
  {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin'},
  {id: 3, name: 'David Lee', email: 'david.lee@example.com', role: 'Customer'},
];

export default function AdminUsers() {
  const [userList, setUserList] = useState(users);

  const handleDelete = (id: number) => {
    const updatedUsers = userList.filter(user => user.id !== id);
    setUserList(updatedUsers);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userList.map(user => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>Email: {user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Role: {user.role}</p>
              <div className="flex justify-between mt-4">
                <Button size="sm">Edit</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(user.id)}>
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
