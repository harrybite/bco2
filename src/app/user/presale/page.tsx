import MintForm from '@/components/MintForm';

export default function PresalePage() {
  // Replace with actual project address
  const projectAddress = '0xYourBCO2ContractAddress';

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Presale</h1>
      <MintForm projectAddress={projectAddress} />
    </div>
  );
}