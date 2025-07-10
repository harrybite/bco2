'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { parseEther } from '@/lib/utils';

export default function MintForm({ projectAddress }: { projectAddress: string }) {
  const { bco2Contract, rusdContract } = useContract();
  const [quantity, setQuantity] = useState('');
  const [isApproving, setIsApproving] = useState(false);

  const handleApprove = async () => {
    if (!rusdContract || !bco2Contract || !quantity) return;
    setIsApproving(true);
    try {
      const amount = parseEther(quantity);
      const mintPrice = await bco2Contract.mintPrice();
      const totalCost = amount.mul(mintPrice);
      const tx = await rusdContract.approve(projectAddress, totalCost);
      await tx.wait();
      alert('RUSD approved!');
    } catch (error) {
      console.error('Error approving RUSD:', error);
      alert('Failed to approve RUSD.');
    } finally {
      setIsApproving(false);
    }
  };

  const handleMint = async () => {
    if (!bco2Contract || !quantity) return;
    try {
      const tx = await bco2Contract.mintWithRUSD(parseEther(quantity));
      await tx.wait();
      alert('Credits minted successfully!');
    } catch (error) {
      console.error('Error minting credits:', error);
      alert('Failed to mint credits.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <input
        type="number"
        placeholder="Quantity to Mint"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleApprove}
        disabled={isApproving}
        className="bg-secondary text-white px-4 py-2 rounded mr-2"
      >
        {isApproving ? 'Approving...' : 'Approve RUSD'}
      </button>
      <button
        onClick={handleMint}
        disabled={!quantity}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Mint Credits
      </button>
    </div>
  );
}