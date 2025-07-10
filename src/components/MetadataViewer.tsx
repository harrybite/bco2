'use client';

import { useState, useEffect } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { Credit } from '@/lib/types';
import CreditCard from './CreditCard';

export default function MetadataViewer({ tokenId, amount }: { tokenId: string; amount: string }) {
  const { bco2Contract } = useContract();
  const [credit, setCredit] = useState<Credit | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      if (!bco2Contract) return;
      try {
        const uri = await bco2Contract.uri(tokenId);
        const response = await fetch(uri);
        const metadata = await response.json();
        setCredit({ tokenId, amount, metadata });
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetadata();
  }, [bco2Contract, tokenId, amount]);

  if (!credit) return <div>Loading...</div>;

  return <CreditCard credit={credit} />;
}