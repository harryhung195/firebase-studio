'use client';

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">About The Nail Shop</h1>

      <img
        src="https://picsum.photos/400/200"
        alt="Nail Shop"
        className="w-full h-auto mb-4 rounded-md"
      />

      <p className="mb-4">
        Welcome to The Nail Shop! We are dedicated to providing high-quality nail products and exceptional
        customer service. Our mission is to help you achieve beautiful and healthy nails with ease.
      </p>

      <h2 className="text-xl font-semibold mb-2">Our Story</h2>
      <p className="mb-4">
        Details about the founding and history of The Nail Shop will be placed here.
      </p>

      <h2 className="text-xl font-semibold mb-2">Our Products</h2>
      <p className="mb-4">
        Information about the range of products we offer, including nail polish, tools, and accessories,
        will be placed here.
      </p>

      <h2 className="text-xl font-semibold mb-2">Our Commitment</h2>
      <p className="mb-4">
        Our commitment to quality, safety, and customer satisfaction will be detailed here.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns, please don't hesitate to contact us.
      </p>
    </div>
  );
}

