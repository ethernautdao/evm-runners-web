import { ReactNode } from "react";
import { appTitle } from "@/utils/strings";
import { optimism } from "wagmi/chains";
import Head from "next/head";
import useIsMounted from "../hooks/useIsMounted";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navbar/NavBar";
import styles from "@/styles/Layout.module.css";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { mounted } = useIsMounted();

  if (!mounted) {
    return <></>;
  }

  if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) {
    throw new Error(
      "You need to provide a NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID env variable"
    );
  }

  const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
  const chains = [optimism];

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ chains, projectId }),
    publicClient,
  });

  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <WagmiConfig config={wagmiConfig}>
      <Head>
        <title>{appTitle}</title>
        <meta name="description" content="An EVM-based game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/edaologo.png" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  );
}
