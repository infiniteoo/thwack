import * as bitcoin from "bitcoinjs-lib";
import ECPairFactory from "ecpair";
import * as ecc from "tiny-secp256k1";

const ECPair = ECPairFactory(ecc);

// Define the testnet network
const testnet = bitcoin.networks.testnet;

export const generateWallet = () => {
  const keyPair = ECPair.makeRandom({ network: testnet });
  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: testnet,
  });
  const privateKey = keyPair.toWIF();
  return { address, privateKey };
};

export const createTransaction = async (
  sender,
  recipient,
  amount,
  privateKey
) => {
  const keyPair = ECPair.fromWIF(privateKey, testnet);
  const psbt = new bitcoin.Psbt({ network: testnet });

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

// Ensure the function is correctly exporting and you can call it to generate a wallet
console.log(generateWallet());
