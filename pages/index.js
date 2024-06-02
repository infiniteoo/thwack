import Head from "next/head";
import BitcoinPrice from "../components/BitcoinPrice";

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
      </main>
    </div>
  );
}
