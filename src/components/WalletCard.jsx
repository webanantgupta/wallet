import { useEffect, useState } from "react";
import { ethers } from "ethers";

const WalletCard = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const network = await provider.getNetwork();
    const balance = await provider.getBalance(accounts[0]);
    
    setWalletAddress(accounts[0]);
    setNetwork(network.name);
    setEthBalance(ethers.formatEther(balance));
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        connectWallet();
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-xl rounded-xl space-y-4">
      <button
        onClick={connectWallet}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Connect Wallet
      </button>

      {walletAddress && (
        <div className="space-y-2">
          <p><strong>Address:</strong> {walletAddress}</p>
          <p><strong>Network:</strong> {network}</p>
          <p><strong>ETH Balance:</strong> {ethBalance} ETH</p>
        </div>
      )}
    </div>
  );
};

export default WalletCard;
