'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useState} from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign In', email, password);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
