import { generateWallet } from "../../utils/bitcoin";

export default function handler(req, res) {
  const wallet = generateWallet();
  res.status(200).json(wallet);
}
