import Link from 'next/link';
import WalletConnect from '@/components/WalletConnect';

export default function AdministrationLayout() {
  return (
    <WalletConnect>
      <div className="flex">
        <div className="w-1/4 bg-gray-600 p-4">
          <h2 className="text-xl font-bold mb-4">Administration</h2>
          <Link href="/administration/governance" className="block mb-2 text-primary">
            Governance
          </Link>
          <Link href="/administration/validators" className="block mb-2 text-primary">
            Validators/Verifiers
          </Link>
          <Link href="/administration/registry" className="block mb-2 text-primary">
            Registry
          </Link>
        </div>
      </div>
    </WalletConnect>
  );
}