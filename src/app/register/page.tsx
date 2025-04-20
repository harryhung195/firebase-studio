'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register', name, email, password);
    router.push('/signin');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="mt-1"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="mt-1"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}

