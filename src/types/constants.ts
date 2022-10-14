export interface ChainInfo {
  label: string;
  appUrl: string;
  rpcUrl: string;
  explorer: string;
  apiUrl: string;
  osApiUrl: string;
  cdnUrl: string;
  rewardsSubgraphUrl: string;
  cloudinaryUrl: string;
}

export interface Addresses {
  WETH: string;
  ROYALTY_FEE_MANAGER: string;
  ROYALTY_FEE_REGISTRY: string;
  ROYALTY_FEE_SETTER: string;
  EXCHANGE: string;
  TRANSFER_MANAGER_ERC721: string;
  TRANSFER_MANAGER_ERC1155: string;
  STRATEGY_STANDARD_SALE: string;
  TRANSFER_SELECTOR_NFT: string;
  STRATEGY_COLLECTION_SALE: string;
  STRATEGY_PRIVATE_SALE: string;
  STRATEGY_DUTCH_AUCTION: string;
  EXECUTION_MANAGER: string;
  CURRENCY_MANAGER: string;
  ORDER_VALIDATOR_V1: string;
}
