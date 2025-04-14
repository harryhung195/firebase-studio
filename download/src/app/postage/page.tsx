'use client';

export default function Postage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Postage &amp; Delivery Information</h1>

      <img
        src="https://picsum.photos/400/200"
        alt="Nail Shop"
        className="w-full h-auto mb-4 rounded-md"
      />

      <p className="mb-4">
        The Nail Shop currently only posts orders within Australia. All our stock is within our South Australian warehouse
        (NOT overseas). Orders are usually packed and dispatched within 1-2 business days of being placed. All orders
        are packed during business hours (and not weekends).
      </p>

      <h2 className="text-xl font-semibold mb-2">FLAT RATE Postage</h2>
      <p className="mb-4">Details about flat rate postage will be placed here.</p>

      <h2 className="text-xl font-semibold mb-2">Tracking Your Order</h2>
      <p className="mb-4">Information on how to track your order will be placed here.</p>

      <h2 className="text-xl font-semibold mb-2">Flammable Goods</h2>
      <p className="mb-4">Special information regarding flammable goods and their shipping will be placed here.</p>

      <h2 className="text-xl font-semibold mb-2">Delivery Details</h2>
      <p className="mb-4">Specific delivery details and policies will be placed here.</p>

      <h2 className="text-xl font-semibold mb-2">CLICK &amp; COLLECT</h2>
      <p className="mb-4">Information about click and collect options will be placed here.</p>
    </div>
  );
}
