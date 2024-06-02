import { createTransaction } from "../../utils/bitcoin";

export default async function handler(req, res) {
  const { sender, recipient, amount, privateKey } = req.body;

  try {
    const txHex = await createTransaction(
      sender,
      recipient,
      amount,
      privateKey
    );
    res.status(200).json({ txHex });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
