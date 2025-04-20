import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

let users: User[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      role: 'user',
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } else if (req.method === 'PUT') {
    const { id, name, email, role } = req.body;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { id, name, email, role };
      res.status(200).json(users[userIndex]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
          users.splice(userIndex, 1);
          res.status(200).json({ message: 'User deleted' });
      } else {
          res.status(404).json({ message: 'User not found' });
      }

  } else {
    res.status(404).json({ message: 'Not found' });
  }
}