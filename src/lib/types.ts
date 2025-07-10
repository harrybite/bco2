export interface Project {
  id: string;
  projectAddress: string;
  approvalStatus: boolean;
  creditsIssued: string;
  creditsMinted: string;
  treasuryBalance: string;
}

export interface Trade {
  seller: string;
  buyer: string;
  tokenId: string;
  amount: string;
  price: string;
  timestamp: string;
}

export interface Credit {
  tokenId: string;
  amount: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: { trait_type: string; value: string }[];
  };
}