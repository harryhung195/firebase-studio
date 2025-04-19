'use client';

// This is the home page

import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="py-12" id="categories">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1: $5 and Under */}
            <Link href="/category/under-5" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/400/300"
                alt="$5 and Under"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">$5 and Under</h3>
              </div>
            </Link>

            {/* Category 2: $10 and Under */}
            <Link href="/category/under-10" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/401/300"
                alt="$10 and Under"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">$10 and Under</h3>
              </div>
            </Link>

            {/* Category 3: Clearance Sale */}
            <Link href="/category/clearance" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/402/300"
                alt="Clearance Sale"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Clearance Sale</h3>
              </div>
            </Link>

            {/* Category 4: Easter Nail Products */}
            <Link href="/category/easter" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/403/300"
                alt="Easter Nail Products"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Easter Nail Products</h3>
              </div>
            </Link>

            {/* Category 5: New Nail Salon Supplies */}
            <Link href="/category/new-supplies" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/404/300"
                alt="New Nail Salon Supplies"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">New Nail Salon Supplies</h3>
              </div>
            </Link>

            {/* Category 6: Acrylic &amp; Gel Removal Products */}
            <Link href="/category/removal-products" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/405/300"
                alt="Acrylic &amp; Gel Removal Products"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Acrylic &amp; Gel Removal Products</h3>
              </div>
            </Link>

            {/* Category 7: Acrylic Liquids &amp; Powders */}
            <Link href="/category/acrylic-liquids-powders" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/406/300"
                alt="Acrylic Liquids &amp; Powders"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Acrylic Liquids &amp; Powders</h3>
              </div>
            </Link>

            {/* Category 8: Brushes */}
            <Link href="/category/brushes" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/407/300"
                alt="Brushes"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Brushes</h3>
              </div>
            </Link>

            {/* Category 9: Dip Powders, Liquids and Kits */}
            <Link href="/category/dip-powders-liquids-kits" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/408/300"
                alt="Dip Powders, Liquids and Kits"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Dip Powders, Liquids and Kits</h3>
              </div>
            </Link>

            {/* Category 10: Education &amp; Training Products */}
            <Link href="/category/education-training" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/409/300"
                alt="Education &amp; Training Products"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Education &amp; Training Products</h3>
              </div>
            </Link>

            {/* Category 11: Electrical Equipment */}
            <Link href="/category/electrical-equipment" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/410/300"
                alt="Electrical Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Electrical Equipment</h3>
              </div>
            </Link>

            {/* Category 12: Files &amp; Buffers */}
            <Link href="/category/files-buffers" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/411/300"
                alt="Files &amp; Buffers"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Files &amp; Buffers</h3>
              </div>
            </Link>

            {/* Category 13: Gel Products */}
            <Link href="/category/gel-products" className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/412/300"
                alt="Gel Products"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">Gel Products</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

