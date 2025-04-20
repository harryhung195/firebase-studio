import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'; // Fallback for local development
const dbName = process.env.MONGODB_DB || 'nailshop'; // Fallback for local development

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db(dbName);
      const orders = db.collection('orders'); // Collection name

      // Extract order details from the request body
      const orderDetails = req.body;

      // Validate order details (add more validation as needed)
      if (!orderDetails || !orderDetails.userId || !orderDetails.email || !orderDetails.amount) {
        return res.status(400).json({ message: 'Invalid order details' });
      }

      // Insert the order into the database
      const result = await orders.insertOne(orderDetails);

      console.log('Order saved to database:', result);
      res.status(200).json({ message: 'Order saved successfully', orderId: result.insertedId });
    } catch (error: any) {
      console.error('Failed to save order:', error);
      res.status(500).json({ message: 'Failed to save order', error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
