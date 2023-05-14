import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Golds by Jakpat</title>
        <meta name="description" content="Rick and Morty API" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Header />
        <MainContent />
        <Footer />
      </main>
    </>
  );
}
