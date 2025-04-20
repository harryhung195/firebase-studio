import { RegisterUser, User } from '@/types';

const baseUrl = '/api/users';

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return await response.json() as User[];
  } catch (error: any) {
    console.error('Error fetching users:', error);
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
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
    throw new Error(`Failed to create user: ${response.status}`);
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
      throw new Error(`Failed to update user: ${response.status}`);
    }
    return await response.json() as User;
  }

  export async function deleteUser(id: string): Promise<void> {
     try {
        const response = await fetch(`/api/users?id=${id}`, { // Corrected URL here
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Failed to delete user: ${response.status}`);
        }
    } catch (error) {
        console.error('Error deleting user:', error);
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

