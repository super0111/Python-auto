export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}

const SUPPORTED_CHAIN_IDS = [
  1, 4, 3, 42, 5, 56, 97, 137, 80001, 56, 97, 1337, 250,
];

const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/a346366462c84f2c8f4a984e4bfd02e6',
  47:"https://bsc-dataseed1.binance.org/",
  137: 'https://polygon-mainnet.infura.io/v3/cb69790f7bcf4870bed74530bdf4c7aa',
};

  //metamask
export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/cb69790f7bcf4870bed74530bdf4c7aa`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  // pollingInterval: 15000,
});

export const walletlink = new WalletLinkConnector({ // coinbase wallet
  url: RPC_URLS[137],
  appName: '',
  supportedChainIds: [1, 4, 80001, 250],
});