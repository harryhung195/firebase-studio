import { RegisterUser, User } from '@/types';

const baseUrl = '/api/users';

export async function getUsers(): Promise<User[]> {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return await response.json() as User[];
}

export async function createUser(user: Omit<User, 'id'>): Promise<User> {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return await response.json() as User;
}

export async function registerUser(user: Omit<RegisterUser, 'password' | 'role'>): Promise<User> {
  const response = await fetch(baseUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: user.name, email: user.email }) });
  return await response.json() as User;
}

export async function updateUser(user: User): Promise<User> {
    const response = await fetch(`${baseUrl}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    return await response.json() as User;
  }

  export async function deleteUser(id: string): Promise<void> {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
  }

export async function loginUser(email: string, password?: string): Promise<User> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error('Invalid credentials');
  }
  return await response.json() as User;
}