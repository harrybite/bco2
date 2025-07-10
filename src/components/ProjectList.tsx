/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState, useEffect } from 'react';
import { useContract } from '@/lib/hooks/useContract';
import { useProject } from '@/lib/hooks/useProject';
import { Project } from '@/lib/types';

export default function ProjectList() {
  const { registryContract } = useContract();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!registryContract) return;
      try {
        // Assume registry has a getProjects function
        const projectAddresses: string[] = await registryContract.getProjects();
        const projectData = await Promise.all(
          projectAddresses.map(async (addr) => {
            const project = useProject(addr);
            return project;
          })
        );
        setProjects(projectData.filter((p) => p !== null) as Project[]);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [registryContract]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <p>Project Address: {project.projectAddress}</p>
            <p>Approval Status: {project.approvalStatus ? 'Approved' : 'Pending'}</p>
            <p>Credits Issued: {project.creditsIssued} tons</p>
            <p>Credits Minted: {project.creditsMinted} tons</p>
            <p>Treasury Balance: {project.treasuryBalance} RUSD</p>
          </div>
        ))}
      </div>
    </div>
  );
}