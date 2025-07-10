import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import ContextProvider from '@/context';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'BCO2 Carbon Credits',
  description: 'Manage carbon credits on the blockchain',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')
  return (
    <html lang="en">
      <body>
        <ContextProvider cookies={cookies}>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </ContextProvider>
        
      </body>
    </html>
  );
}