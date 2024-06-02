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
    <div className="text-center mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-black">
        Create Bitcoin Transaction
      </h2>
      <input
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        type="text"
        name="sender"
        placeholder="Sender Address"
        onChange={handleChange}
      />
      <input
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        type="text"
        name="recipient"
        placeholder="Recipient Address"
        onChange={handleChange}
      />
      <input
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        type="number"
        name="amount"
        placeholder="Amount (satoshis)"
        onChange={handleChange}
      />
      <input
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        type="text"
        name="privateKey"
        placeholder="Private Key"
        onChange={handleChange}
      />
      <button
        onClick={createTransaction}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Transaction
      </button>
      {txHex && (
        <div className="mt-4">
          <p className="text-black">Transaction Hex: {txHex}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
