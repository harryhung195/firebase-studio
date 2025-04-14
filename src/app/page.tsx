'use client';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/400/300"
                alt="Nail Polish"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Nail Polish</h3>
              </div>
            </div>

            {/* Category 2 */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/401/300"
                alt="Nail Art"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Nail Art</h3>
              </div>
            </div>

            {/* Category 3 */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/402/300"
                alt="Nail Care"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Nail Care</h3>
              </div>
            </div>

            {/* Category 4 */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/403/300"
                alt="Tools &amp; Accessories"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Tools &amp; Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
