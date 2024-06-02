import { useState } from "react";
import axios from "axios";

const TransactionForm = () => {
  const [form, setForm] = useState({
    sender: "",
    recipient: "",
    amount: "",
    privateKey: "",
  });
  const [txHex, setTxHex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const createTransaction = async () => {
    const response = await axios.post("/api/create-transaction", form);
    setTxHex(response.data.txHex);
  };

  return (
    <div>
      <h2>Create Bitcoin Transaction</h2>
      <input
        type="text"
        name="sender"
        placeholder="Sender Address"
        onChange={handleChange}
      />
      <input
        type="text"
        name="recipient"
        placeholder="Recipient Address"
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount (satoshis)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="privateKey"
        placeholder="Private Key"
        onChange={handleChange}
      />
      <button onClick={createTransaction}>Create Transaction</button>
      {txHex && (
        <div>
          <p>Transaction Hex: {txHex}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
