import WalletConnect from '@/components/WalletConnect';

export default function RetireLayout({ children }: { children: React.ReactNode }) {
  return (
    <WalletConnect>
      <div>
        <h1 className="text-3xl font-bold mb-4">Retire Credits</h1>
        {children}
      </div>
    </WalletConnect>
  );
}