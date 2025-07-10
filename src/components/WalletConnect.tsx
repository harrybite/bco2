'use client';

import { useWallet } from '@/lib/hooks/useWallet';

export default function WalletConnect({ children }: { children: React.ReactNode }) {
  const { isConnected } = useWallet();
  console.log("Is connected", isConnected)
  if (!isConnected) {
    return (
      <div className="text-center p-8">
        <p className="text-xl">Please connect your wallet to access this page.</p>
      </div>
    );
  }

  return <>{children}</>;
}