'use server'
export async function saveOrder(orderDetails: any): Promise<any> {
  try {
    const response = await fetch('/api/save-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });

    if (!response.ok) {
      throw new Error(`Failed to save order: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error('Error saving order:', error);
    throw error;
  }
}
