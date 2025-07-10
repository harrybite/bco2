'use client';

import Link from 'next/link';
import { useWallet } from '@/lib/hooks/useWallet';
import { shortenAddress } from '@/lib/utils';

export default function Navbar() {
  const { account, isConnected, connectWallet, disconnectWallet } = useWallet();

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BCO2 Carbon Credits
        </Link>
        <div className="space-x-4">
          <Link href="/administration">Administration</Link>
          <Link href="/issuer">Issuer</Link>
          <Link href="/user">User</Link>
          <Link href="/retire">Retire</Link>
          <Link href="/account">Account</Link>
          {isConnected ? (
            <div className="flex items-center space-x-2">
              <span>{shortenAddress(account!)}</span>
          <button onClick={() => disconnectWallet()} className="bg-secondary px-3 py-1 rounded cursor-pointer">
  Disconnect
</button>
            </div>
          ) : (
            <button onClick={() => connectWallet()} className="bg-secondary px-3 py-1 rounded cursor-pointer">
        Connect Wallet
      </button>
          )}
        </div>
      </div>
    </nav>
  );
}