
// Olive Project – DApp Dashboard UI (React + TailwindCSS)
// Connects wallet, shows token holdings, tree ownership, and profit claim interface

import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const connection = new Connection("https://api.devnet.solana.com");

export default function OliveDashboard() {
  const wallet = useWallet();
  const [tokenBalance, setTokenBalance] = useState(null);
  const [treeData, setTreeData] = useState([]);
  const [claimableProfits, setClaimableProfits] = useState(null);

  useEffect(() => {
    if (wallet.connected && wallet.publicKey) {
      fetchUserTokenData(wallet.publicKey);
      fetchTreeOwnership(wallet.publicKey);
    }
  }, [wallet.connected]);

  const fetchUserTokenData = async (publicKey) => {
    // Placeholder for real token balance query
    setTokenBalance("1,250 S-OLV | 8,500 U-OLV");
    setClaimableProfits("3.42 USDC or 0.02 SOL");
  };

  const fetchTreeOwnership = async (publicKey) => {
    // Placeholder tree NFT representation
    setTreeData([
      { id: "Tree #104", location: "Block A", yield: "5.7L/year" },
      { id: "Tree #187", location: "Block C", yield: "6.3L/year" },
    ]);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">Olive Project Dashboard</h1>
          <WalletMultiButton />
        </div>

        {wallet.connected ? (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">Your Token Holdings</h2>
              <p>{tokenBalance}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">Your Trees</h2>
              <ul>
                {treeData.map((tree, i) => (
                  <li key={i} className="border-b py-2">
                    🌳 {tree.id} – {tree.location}, Est. Yield: {tree.yield}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">Claimable Profits</h2>
              <p>{claimableProfits}</p>
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Claim Profits
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Please connect your wallet to view dashboard data.</p>
        )}
      </div>
    </div>
  );
}
