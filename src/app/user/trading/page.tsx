import TradeForm from '@/components/TradeForm';
import TradeHistory from '@/components/TradeHistory';
import { useWallet } from '@/lib/hooks/useWallet';

export default function TradingPage() {
  const { account } = useWallet();
  // Replace with actual project address
  const projectAddress = '0xYourBCO2ContractAddress';

  if (!account) return null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Trading</h1>
      <TradeForm projectAddress={projectAddress} />
      <TradeHistory account={account} />
    </div>
  );
}