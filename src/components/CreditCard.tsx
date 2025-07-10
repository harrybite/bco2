import { Credit } from '@/lib/types';

export default function CreditCard({ credit }: { credit: Credit }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={credit.metadata.image} alt={credit.metadata.name} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-bold">{credit.metadata.name}</h3>
      <p>{credit.metadata.description}</p>
      <p>Amount: {credit.amount} tons</p>
      <div className="mt-2">
        {credit.metadata.attributes.map((attr, index) => (
          <p key={index}>
            {attr.trait_type}: {attr.value}
          </p>
        ))}
      </div>
    </div>
  );
}