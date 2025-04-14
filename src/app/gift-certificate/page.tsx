'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export default function GiftCertificate() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Purchase a Gift Certificate</h1>
      <p className="mb-4">
        Give the gift of choice with a Nail Shop Gift Certificate! Fill out the form below to customize your gift.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gift Certificate Form */}
        <div>
          <div className="mb-4">
            <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
              Recipient Name
            </label>
            <Input type="text" id="recipientName" placeholder="Enter recipient's name" className="mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">
              Recipient Email
            </label>
            <Input type="email" id="recipientEmail" placeholder="Enter recipient's email" className="mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <Input type="number" id="amount" placeholder="Enter amount" className="mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message (Optional)
            </label>
            <Textarea id="message" placeholder="Enter a personalized message" className="mt-1" />
          </div>

          <Button>Purchase Gift Certificate</Button>
        </div>

        {/* Placeholder Image */}
        <div>
          <img
            src="https://picsum.photos/400/300"
            alt="Gift Certificate"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}


