'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function createPaymentIntent(amount: number) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe uses smallest currency unit
      currency: 'USD', // Replace with your currency
      automatic_payment_methods: {
        enabled: true,
      },
      
    });

    return paymentIntent.client_secret;
  } catch (error: any) {
    console.error("Failed to create Payment Intent:", error);
    throw new Error(error.message);
  }
}
