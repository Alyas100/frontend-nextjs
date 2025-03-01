// The layout.tsx file defines the root layout for your application.

import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Food Ordering App',
  description: 'Order your favorite meals online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
