'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';

export default function GovernancePage() {
  const { bco2Contract } = useContract();
  const [maxPerWallet, setMaxPerWallet] = useState('');
  const [treasury, setTreasury] = useState('');
  const [uri, setUri] = useState('');
  const [tokenId, setTokenId] = useState('1');

  const handleSetMaxPerWallet = async () => {
    if (!bco2Contract) return;
    try {
      const tx = await bco2Contract.setMaxPerWallet(maxPerWallet);
      await tx.wait();
      alert('Max per wallet updated!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update max per wallet.');
    }
  };

  const handleUpdateTreasury = async () => {
    if (!bco2Contract) return;
    try {
      const tx = await bco2Contract.updateTreasury(treasury);
      await tx.wait();
      alert('Treasury updated!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update treasury.');
    }
  };

  const handleSetTokenURI = async () => {
    if (!bco2Contract) return;
    try {
      const tx = await bco2Contract.setTokenURI(tokenId, uri);
      await tx.wait();
      alert('Token URI updated!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update token URI.');
    }
  };

  const handleStopMinting = async () => {
    if (!bco2Contract) return;
    try {
      const tx = await bco2Contract.stopMinting();
      await tx.wait();
      alert('Minting stopped!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to stop minting.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Governance</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Set Max Per Wallet</h2>
          <input
            type="number"
            placeholder="Max Per Wallet"
            value={maxPerWallet}
            onChange={(e) => setMaxPerWallet(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleSetMaxPerWallet}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Update Treasury</h2>
          <input
            type="text"
            placeholder="Treasury Address"
            value={treasury}
            onChange={(e) => setTreasury(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleUpdateTreasury}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Set Token URI</h2>
          <select
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          >
            <option value="1">Non-Retired</option>
            <option value="2">Retired</option>
          </select>
          <input
            type="text"
            placeholder="Token URI"
            value={uri}
            onChange={(e) => setUri(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleSetTokenURI}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Stop Minting</h2>
          <button
            onClick={handleStopMinting}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop Minting
          </button>
        </div>
      </div>
    </div>
  );
}