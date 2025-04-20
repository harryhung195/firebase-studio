'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { User } from '@/types';
import { getUsers, deleteUser } from '@/services/user-service';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (err: any) {
      console.error('Error fetching users:', err);
       toast({
        title: "Failed to fetch users",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        fetchUsers(); // Refresh the user list after deletion
        toast({
          title: "User Deleted!",
          description: "Successfully deleted the user.",
        });
      } catch (err: any) {
        console.error('Error deleting user:', err);
        toast({
          title: "Failed to delete user",
          description: err.message || "Something went wrong",
          variant: "destructive",
        });
        setError(err.message || 'Failed to delete user');
      }
    }
  };

  if (loading) {
    return <div className="container mx-auto py-8">Loading users...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link href="/admin/users/new">
          <Button>Create New User</Button>
        </Link>
      </div>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <Table>
          <TableCaption>A list of users in the system.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/users/${user.id}/edit`}>
                      <Button variant="outline" size="icon">
                        <Pencil1Icon className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
