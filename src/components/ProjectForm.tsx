'use client';

import { useState } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { parseEther } from '@/lib/utils';

export default function ProjectForm() {
  const { registryContract } = useContract();
  const [formData, setFormData] = useState({
    mintPrice: '',
    treasury: '',
    isPermanent: true,
    validity: '0',
    vintage: '',
    methodology: '',
    batchNumber: '',
    repoLink: '',
    nonRetiredURI: '',
    retiredURI: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registryContract) return;

    try {
      const tx = await registryContract.createProject(
        parseEther(formData.mintPrice),
        formData.treasury,
        formData.isPermanent,
        parseInt(formData.validity),
        parseInt(formData.vintage),
        formData.methodology,
        parseInt(formData.batchNumber),
        formData.repoLink,
        formData.nonRetiredURI,
        formData.retiredURI
      );
      await tx.wait();
      alert('Project created successfully!');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Mint Price (ETH)"
        value={formData.mintPrice}
        onChange={(e) => setFormData({ ...formData, mintPrice: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Treasury Address"
        value={formData.treasury}
        onChange={(e) => setFormData({ ...formData, treasury: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <label>
        <input
          type="checkbox"
          checked={formData.isPermanent}
          onChange={(e) => setFormData({ ...formData, isPermanent: e.target.checked })}
        />
        Is Permanent
      </label>
      <input
        type="number"
        placeholder="Validity (years)"
        value={formData.validity}
        onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Vintage (year)"
        value={formData.vintage}
        onChange={(e) => setFormData({ ...formData, vintage: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Methodology"
        value={formData.methodology}
        onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Batch Number"
        value={formData.batchNumber}
        onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Repository Link"
        value={formData.repoLink}
        onChange={(e) => setFormData({ ...formData, repoLink: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Non-Retired URI"
        value={formData.nonRetiredURI}
        onChange={(e) => setFormData({ ...formData, nonRetiredURI: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Retired URI"
        value={formData.retiredURI}
        onChange={(e) => setFormData({ ...formData, retiredURI: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Create Project
      </button>
    </form>
  );
}