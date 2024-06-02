import { useState } from "react";
import axios from "axios";

const WalletGenerator = () => {
  const [wallet, setWallet] = useState(null);

  const generateWallet = async () => {
    const response = await axios.get("/api/generate-wallet");
    setWallet(response.data);
  };

  return (
    <div>
      <h2>Generate Bitcoin Wallet</h2>
      <button onClick={generateWallet}>Generate</button>
      {wallet && (
        <div>
          <p>Address: {wallet.address}</p>
          <p>Private Key: {wallet.privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
