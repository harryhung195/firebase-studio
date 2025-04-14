'use client';

export default function Sds() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Safety Data Sheets (SDS)</h1>

      <img
        src="https://picsum.photos/400/200"
        alt="Nail Shop"
        className="w-full h-auto mb-4 rounded-md"
      />

      <p className="mb-4">
        Welcome to the Safety Data Sheets (SDS) page for The Nail Shop. Here, you can find important safety
        information about our products.
      </p>

      <h2 className="text-xl font-semibold mb-2">SDS Information</h2>
      <p className="mb-4">
        Details about how to access and understand SDS information will be placed here. This may include
        links to specific SDS documents or a search function.
      </p>

      <h2 className="text-xl font-semibold mb-2">Important Safety Guidelines</h2>
      <p className="mb-4">
        General safety guidelines for handling and using nail products will be provided here. Always read
        and follow the instructions on the product label.
      </p>

      <h2 className="text-xl font-semibold mb-2">Emergency Procedures</h2>
      <p className="mb-4">
        In case of an emergency, such as skin irritation or accidental ingestion, refer to the product's
        SDS for specific instructions. Contact a medical professional immediately if necessary.
      </p>

      <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
      <p className="mb-4">
        The information provided on this page is for informational purposes only and does not constitute
        professional advice. The Nail Shop is not liable for any damages or injuries resulting from the
        use or misuse of our products.
      </p>
    </div>
  );
}

