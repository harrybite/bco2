import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import BCO2ABI from '../contracts/BCO2.json';
import RUSDABI from '../contracts/RUSD.json';
import RegistryABI from '../contracts/CarbonCreditRegistry.json';
import { useWallet } from './useWallet';

export const useContract = () => {
  const { signer } = useWallet();
  const [bco2Contract, setBCO2Contract] = useState<ethers.Contract | null>(null);
  const [rusdContract, setRUSDContract] = useState<ethers.Contract | null>(null);
  const [registryContract, setRegistryContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    if (signer) {
      setBCO2Contract(new ethers.Contract(BCO2ABI.address, BCO2ABI.abi, signer));
      setRUSDContract(new ethers.Contract(RUSDABI.address, RUSDABI.abi, signer));
      setRegistryContract(new ethers.Contract(RegistryABI.address, RegistryABI.abi, signer));
    }
  }, [signer]);

  return { bco2Contract, rusdContract, registryContract };
};