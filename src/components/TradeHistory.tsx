'use client';

import { useState, useEffect } from 'react';
import { Trade } from '@/lib/types';

export default function TradeHistory({ account }: { account: string }) {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    // Fetch trade history from off-chain database or subgraph
    setTrades([
      // Mock data
      {
        seller: '0x123...456',
        buyer: account,
        tokenId: '1',
        amount: '1000',
        price: '10 RUSD',
        timestamp: '2025-07-10',
      },
    ]);
  }, [account]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trade History</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-2">Seller</th>
            <th className="p-2">Buyer</th>
            <th className="p-2">Token ID</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Price</th>
            <th className="p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <td className="p-2">{trade.seller}</td>
              <td className="p-2">{trade.buyer}</td>
              <td className="p-2">{trade.tokenId}</td>
              <td className="p-2">{trade.amount}</td>
              <td className="p-2">{trade.price}</td>
              <td className="p-2">{trade.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}