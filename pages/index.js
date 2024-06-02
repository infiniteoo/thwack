import Head from "next/head";
import BitcoinPrice from "../components/BitcoinPrice";
import WalletGenerator from "../components/WalletGenerator";
import TransactionForm from "../components/TransactionForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bitcoin Price App</title>
        <meta
          name="description"
          content="A simple Bitcoin price tracking app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BitcoinPrice />
        <WalletGenerator />
        <TransactionForm />
      </main>
    </div>
  );
}
