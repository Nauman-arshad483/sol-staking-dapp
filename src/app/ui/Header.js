"use client";
import React, { useState } from "react";
import styles from "@/app/ui/header.module.css";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false); // State to manage wallet connection

  // Function to handle wallet connection
  const handleConnectWallet = () => {
    // Logic to connect wallet
    setIsConnected(true);
  };

  // Function to handle wallet disconnection
  const handleDisconnectWallet = () => {
    // Logic to disconnect wallet
    setIsConnected(false);
  };

  return (
    <header className={`bg-blue-500 py-4 ${styles.header}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left side */}
        <div className="flex items-center gap-4">
          <img src="/header-logo.png" alt="Logo" className="h-20" />{" "}
          {/* Replace with your logo */}
          <h1 className="text-white text-2xl font-semibold">
            Solana Staking DApp
          </h1>
        </div>

        {/* Connect Wallet button or Wallet info */}
        <div>
          {!isConnected ? (
            <button
              onClick={handleConnectWallet}
              className="text-white px-4 py-2 rounded-xl text-lg font-bold shadow-md hover:bg-blue-500 hover:text-white bg-gradient-to-r from-orange-500 to-purple-500"
            >
              Connect Wallet
            </button>
          ) : (
            <div className="text-white">
              <p>
                Wallet Address: <span>0x123...</span>
              </p>{" "}
              {/* Replace with actual wallet address */}
              <p>
                Balance: <span>10 SOL</span>
              </p>{" "}
              {/* Replace with actual balance */}
              <button
                onClick={handleDisconnectWallet}
                className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white mt-2"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
