export const ChainId = 5;

export const NETWORK_CONFIG = {
  chainId: `0x${ChainId.toString(16)}`,
  chainName: "goerli",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpc: "https://rpc.ankr.com/eth_goerli",
  scanUrl: "https://goerli.etherscan.io/",
};

// constract address
export const CONSTACTS_ADDRESS = "0xe5aAD39C3C73a3254c232Ed6F6Fb4eAA10c93943";

export const IPFS_URL = "http://127.0.0.1:5001/";
