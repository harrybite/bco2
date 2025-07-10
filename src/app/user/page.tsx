import Link from 'next/link';
import WalletConnect from '@/components/WalletConnect';

export default function UserLayout() {
  return (
    <WalletConnect>
      <div className="flex">
        <div className="w-1/4 bg-gray-600 p-4">
          <h2 className="text-xl font-bold mb-4">User</h2>
          <Link href="/user/presale" className="block mb-2 text-primary">
            Presale
          </Link>
          <Link href="/user/trading" className="block mb-2 text-primary">
            Trading
          </Link>
        </div>
      </div>
    </WalletConnect>
  );
}