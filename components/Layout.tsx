import { ReactNode } from "react";
import { appTitle } from "@/utils/strings";
import Head from "next/head";
import useIsMounted from "../hooks/useIsMounted";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navbar/NavBar";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  const { mounted } = useIsMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>{appTitle}</title>
        <meta name="description" content="An EVM-based game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/edaologo.png" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
