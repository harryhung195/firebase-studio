
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Navbar() {
  return (
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
  );
}
