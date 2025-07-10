import { ethers } from 'ethers';

export const formatEther = (wei: string) => ethers.utils.formatEther(wei);
export const parseEther = (ether: string) => ethers.utils.parseEther(ether);
export const shortenAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;