import { modal } from '@/context';
import { useAccount, useChains, useConnect, useDisconnect, useWalletClient } from 'wagmi';
import { ethers } from 'ethers';

export const useWallet = () => {
  const { address, isConnected } = useAccount();
  const { connectors} = useConnect();
  const { disconnect } = useDisconnect();
  const chain = useChains();
  const { data: walletClient } = useWalletClient();

  const signer = walletClient ? new ethers.providers.Web3Provider(walletClient.transport, 'any').getSigner() : null;

  const connectWallet = async () => {
    console.log("Connecting wallet...");
      modal.open()
  };

  const disconnectWallet = () => {
    disconnect();
  };

  return {
    account: address || "",
    isConnected,
    chainId: chain[0]?.id ?? null,
    connectWallet,
    disconnectWallet,
    connectors,
    signer
  };
};