import bitcoin from "bitcoinjs-lib";

export const generateWallet = () => {
  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  const privateKey = keyPair.toWIF();
  return { address, privateKey };
};

export const createTransaction = async (
  sender,
  recipient,
  amount,
  privateKey
) => {
  // This is a simplified example and does not include proper fee handling, UTXO selection, etc.
  const keyPair = bitcoin.ECPair.fromWIF(privateKey);
  const psbt = new bitcoin.Psbt();

  // Add inputs (UTXOs) and outputs
  // In a real app, you would retrieve UTXOs from a service like Blockcypher or your own node

  psbt.addInput({
    hash: "prevTxHash", // Replace with actual UTXO transaction hash
    index: 0, // Replace with actual UTXO index
    nonWitnessUtxo: Buffer.from("prevTxHex", "hex"), // Replace with actual UTXO hex
  });

  psbt.addOutput({
    address: recipient,
    value: amount,
  });

  psbt.signInput(0, keyPair);
  psbt.finalizeAllInputs();

  return psbt.extractTransaction().toHex();
};
