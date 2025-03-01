// The Navbar component provides navigation links to different pages.

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Food Order App</h1>
      <div>
        <Link href="/" className="px-4">Home</Link>
        <Link href="/cart" className="px-4">Cart</Link>
      </div>
    </nav>
  );
}
