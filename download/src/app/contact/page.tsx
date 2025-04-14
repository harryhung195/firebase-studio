'use client';

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>

      <p className="mb-4">
        We would love to hear from you. We're friendly, professional and approachable. If you're trying to
        locate your order, please try tracking your order first with Australia Post (tracking number can be
        found in your account or email).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Phone */}
        <div className="flex items-center">
          <img
            src="https://picsum.photos/100/100"
            alt="Phone"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p>(08) 8263 3636</p>
            <p>Mobile/SMS: 0416 157 087</p>
            <p>Feel free to phone or text us for any enquiries or product help.</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <img
            src="https://picsum.photos/101/100"
            alt="Email"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>info@thenailshop.com.au</p>
            <p>General enquiries can be sent to this address.</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center mb-4">
        <img
          src="https://picsum.photos/102/100"
          alt="Address"
          className="w-16 h-16 mr-4 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>We are located in Holden Hill, South Australia</p>
          <p>Hours: Mon-Fri, 9:15am - 4:30pm</p>
          <p>This is our reception/warehouse. Orders must still be placed online. Pick-up is by arrangement.</p>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Keep Up With Us</h2>
        <p className="mb-4">Keep up with us on Facebook, Instagram or contact us via messenger.</p>
        <div className="flex items-center">
          <img
            src="https://picsum.photos/103/100"
            alt="Social Media"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <p>Facebook | Instagram | Messenger</p>
          </div>
        </div>
      </div>
    </div>
  );
}
