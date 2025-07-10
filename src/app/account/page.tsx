import Link from 'next/link';
import WalletConnect from '@/components/WalletConnect';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <WalletConnect>
      <div className="flex">
        <div className="w-1/4 bg-gray-600 p-4">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <Link href="/account/active" className="block mb-2 text-primary">
            Active Credits
          </Link>
          <Link href="/account/retired" className="block mb-2 text-primary">
            Retired Credits
          </Link>
        </div>
        <div className="w-3/4 p-4">{children}</div>
      </div>
    </WalletConnect>
  );
}