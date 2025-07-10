import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useContract } from './useContract';
import { Project } from '../types';

export const useProject = (projectAddress: string) => {
  const { bco2Contract, rusdContract, registryContract } = useContract();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (bco2Contract && rusdContract && registryContract) {
        try {
          const approvalStatus = await registryContract.isProjectApproved(projectAddress);
          const creditsIssued = await registryContract.creditAmountIssued(projectAddress);
          const totalSupply = await bco2Contract.totalSupply();
          const treasury = await bco2Contract.treasury();
          const treasuryBalance = await rusdContract.balanceOf(treasury);

          setProject({
            id: projectAddress,
            projectAddress,
            approvalStatus,
            creditsIssued: ethers.utils.formatEther(creditsIssued),
            creditsMinted: ethers.utils.formatEther(totalSupply),
            treasuryBalance: ethers.utils.formatEther(treasuryBalance),
          });
        } catch (error) {
          console.error('Error fetching project:', error);
        }
      }
    };

    fetchProject();
  }, [bco2Contract, rusdContract, registryContract, projectAddress]);

  return project;
};