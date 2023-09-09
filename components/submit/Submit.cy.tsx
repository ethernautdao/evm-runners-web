import React from "react";
import { connectWalletText } from "@/utils/strings";
import Submit from "./Submit";
import { optimism } from "wagmi/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";

describe("<Sumbit />", () => {
  const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";
  const chains = [optimism];

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ chains, projectId }),
    publicClient,
  });

  context("No wallet connected", () => {
    beforeEach(() => {
      cy.mount(
        <WagmiConfig config={wagmiConfig}>
          <Submit />
        </WagmiConfig>
      );
    });

    it("should display the correct text", () => {
      cy.get('[data-cy="submit-connect-text"]').should("be.visible");
      cy.get('[data-cy="submit-connect-text"]').contains(connectWalletText);
    });
  });

  /*
  As of the time of writing, stubbing dependency modules hooks doesn't work.
  It is not possible to mock the useAccount hook to implement other tests.
  Note that custom hooks work, that's why in the Leaderboard tests we can mock useLeaderboards.

  Discussions in cypress github are ongoing about this issue. 
  Current solutions require that the components be refactored. 
  More users are pushing for cypress to stop forcing this behavior and allow dependency module hooks to be stubbed.

  Considering this use case doesn't require any interaction with the user wallet aside from connecting, it is not worth to rewrite the components just for a few tests.
  */
});
