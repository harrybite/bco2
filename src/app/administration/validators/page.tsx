'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';

export default function ValidatorsPage() {
  const { registryContract } = useContract();
  const [projectAddress, setProjectAddress] = useState('');

  const handleApproveProject = async () => {
    if (!registryContract) return;
    try {
      const tx = await registryContract.approveProject(projectAddress);
      await tx.wait();
      alert('Project approved!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to approve project.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Validators/Verifiers</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Approve Project</h2>
        <input
          type="text"
          placeholder="Project Address"
          value={projectAddress}
          onChange={(e) => setProjectAddress(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={handleApproveProject}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Approve
        </button>
      </div>
    </div>
  );
}