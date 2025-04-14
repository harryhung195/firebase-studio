
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <>
      <nav className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <span className="font-bold text-xl">
            Welcome to The Nail Shop!
          </span>

          <div className="flex items-center space-x-4">
            <a href="tel:+11234567890" className="text-sm">
              <span className="mr-1"><Icons.phone /></span>
              +1 (123) 456-7890
            </a>

            <div className="flex items-center space-x-2">
              <Link href="/signin">
                <Button variant="secondary" size="sm">
                  <Icons.user className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="accent" size="sm">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-secondary text-secondary-foreground p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Input type="search" placeholder="Search the store..." className="mr-4" />
          </div>
          <span className="text-sm">The Nail Shop Established 2025</span>
          <div className="flex items-center space-x-4">
            <Link href="/gift-certificate" className="text-sm">
              Gift Certificate
            </Link>
            <Link href="/shopping-cart">
              <Button variant="ghost" size="sm">
                <Icons.shoppingCart className="mr-2 h-4 w-4" />
                Shopping Cart
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bg-accent text-accent-foreground p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-around">
          <Link href="/#categories" className="text-sm">
            Home
          </Link>
          <Link href="/postage" className="text-sm">
            Postage & Delivery
          </Link>
          <Link href="/terms" className="text-sm">
            T&Cs
          </Link>
          <Link href="/sds" className="text-sm">
            SDS
          </Link>
          <Link href="/about" className="text-sm">
            About
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
