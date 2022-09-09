import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3.utils";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ProviderNetwork getLibrary={getLibrary}>
        <App />
    </Web3ProviderNetwork>
  </Web3ReactProvider>
);

reportWebVitals();
