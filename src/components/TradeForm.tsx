/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { parseEther } from '@/lib/utils';

export default function TradeForm({ projectAddress }: { projectAddress: string }) {
  const { bco2Contract } = useContract();
  const [formData, setFormData] = useState({
    tokenId: '1',
    amount: '',
    price: '',
  });

  const handleList = async () => {
    if (!bco2Contract) return;
    try {
      // Assume a marketplace contract or off-chain listing
      alert('Listing functionality to be implemented with marketplace integration.');
    } catch (error) {
      console.error('Error listing credits:', error);
      alert('Failed to list credits.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <select
        value={formData.tokenId}
        onChange={(e) => setFormData({ ...formData, tokenId: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="1">Non-Retired Credits</option>
      </select>
      <input
        type="number"
        placeholder="Amount to List"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="number"
        placeholder="Price per Credit (RUSD)"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleList}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        List Credits
      </button>
    </div>
  );
}