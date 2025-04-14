'use client';

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <img
        src="https://picsum.photos/400/200"
        alt="Nail Shop"
        className="w-full h-auto mb-4 rounded-md"
      />

      <p className="mb-4">
        We'd love to hear from you! If you have any questions, comments, or concerns, please don't hesitate
        to reach out to us.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-4">
        Details about how to contact us, including email address, phone number, and physical address, will
        be placed here.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
      <p className="mb-4">
        A contact form where users can submit their inquiries directly will be placed here.
      </p>

      <h2 className="text-xl font-semibold mb-2">Social Media</h2>
      <p className="mb-4">
        Links to our social media profiles will be placed here.
      </p>

      <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
      <p className="mb-4">
        Information about our business hours will be placed here.
      </p>
    </div>
  );
}

