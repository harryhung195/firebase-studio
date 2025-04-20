'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

       <Table>
        <TableCaption>A list of your users.You can edit or delete to change!</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                 <Button size="sm">Edit</Button>
                 <Button variant="destructive" size="sm" onClick={() => handleDelete(user.id)}>
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

