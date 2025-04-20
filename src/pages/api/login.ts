import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/types';

let users: User[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}