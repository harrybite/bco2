/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { parseEther } from '@/lib/utils';

export default function RetireForm({ projectAddress }: { projectAddress: string }) {
  const { bco2Contract } = useContract();
  const [quantity, setQuantity] = useState('');

  const handleRetire = async () => {
    if (!bco2Contract || !quantity) return;
    try {
      const tx = await bco2Contract.retire(parseEther(quantity));
      await tx.wait();
      alert('Credits retired successfully!');
    } catch (error) {
      console.error('Error retiring credits:', error);
      alert('Failed to retire credits.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <input
        type="number"
        placeholder="Quantity to Retire"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleRetire}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Retire Credits
      </button>
    </div>
  );
}