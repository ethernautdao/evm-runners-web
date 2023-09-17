import styles from "@/styles/ConnectButton.module.css";
import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const formatAddress = (address: `0x${string}` | undefined) => {
    return address?.substring(0, 6) + "..." + address?.slice(-4);
  };

  const label = isConnected ? formatAddress(address) : "Connect";

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      open();
    }
  }

  return (
    <button className={styles.connectButton} onClick={onClick}>
      {label}
    </button>
  );
}
