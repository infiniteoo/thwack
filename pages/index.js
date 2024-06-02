import Head from "next/head";
import BitcoinPrice from "../components/BitcoinPrice";
import WalletGenerator from "../components/WalletGenerator";
import TransactionForm from "../components/TransactionForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Bitcoin Price App</title>
        <meta
          name="description"
          content="A simple Bitcoin price tracking app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bitcoin Price App
        </h1>
        <BitcoinPrice />
        <div className="my-8">
          <WalletGenerator />
        </div>
        <TransactionForm />
      </main>
    </div>
  );
}
