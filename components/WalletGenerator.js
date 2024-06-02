import { useState } from "react";
import axios from "axios";

const WalletGenerator = () => {
  const [wallet, setWallet] = useState(null);

  const generateWallet = async () => {
    const response = await axios.get("/api/generate-wallet");
    setWallet(response.data);
  };

  return (
    <div className="text-center mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-black">
        Generate Bitcoin Wallet
      </h2>
      <button
        onClick={generateWallet}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate
      </button>
      {wallet && (
        <div className="mt-4">
          <p className="text-black">Address: {wallet.address}</p>
          <p className="text-black">Private Key: {wallet.privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
