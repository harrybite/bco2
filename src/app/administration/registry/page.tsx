'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';

export default function RegistryPage() {
  const { registryContract } = useContract();
  const [certificateId, setCertificateId] = useState('');

  const handleSetCertificateId = async () => {
    if (!registryContract) return;
    try {
      const tx = await registryContract.setCertificateId(certificateId);
      await tx.wait();
      alert('Certificate ID updated!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update certificate ID.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Registry</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Set Certificate ID</h2>
        <input
          type="text"
          placeholder="Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={handleSetCertificateId}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>
    </div>
  );
}