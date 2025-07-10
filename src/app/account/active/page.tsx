'use client';

import { useState, useEffect } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { useWallet } from '@/lib/hooks/useWallet';
import MetadataViewer from '@/components/MetadataViewer';
import { formatEther } from '@/lib/utils';

export default function ActiveCreditsPage() {
  const { bco2Contract } = useContract();
  const { account } = useWallet();
  const [balance, setBalance] = useState<string>('0');

  useEffect(() => {
    const fetchBalance = async () => {
      if (!bco2Contract || !account) return;
      try {
        const bal = await bco2Contract.balanceOf(account, '1');
        setBalance(formatEther(bal));
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, [bco2Contract, account]);

  if (!account) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Active Credits</h1>
      <p>Total Balance: {balance} tons</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <MetadataViewer tokenId="1" amount={balance} />
      </div>
    </div>
  );
}