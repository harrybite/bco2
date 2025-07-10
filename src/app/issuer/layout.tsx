import WalletConnect from '@/components/WalletConnect';

export default function IssuerLayout({ children }: { children: React.ReactNode }) {
  return (
    <WalletConnect>
      <div>
        <h1 className="text-3xl font-bold mb-4">Issuer Dashboard</h1>
        {children}
      </div>
    </WalletConnect>
  );
}