import RetireForm from '@/components/RetireForm';

export default function RetirePage() {
  // Replace with actual project address
  const projectAddress = '0xYourBCO2ContractAddress';

  return (
    <div>
      <RetireForm projectAddress={projectAddress} />
      {/* Add retirement history component if needed */}
    </div>
  );
}