import { Addresses, SupportedChainId } from "../types";

const mainnetAddresses: Addresses = {
  WETH: "",
  ROYALTY_FEE_MANAGER: "",
  ROYALTY_FEE_REGISTRY: "",
  ROYALTY_FEE_SETTER: "",
  EXCHANGE: "",
  TRANSFER_MANAGER_ERC721: "",
  TRANSFER_MANAGER_ERC1155: "",
  TRANSFER_SELECTOR_NFT: "",
  STRATEGY_STANDARD_SALE: "",
  STRATEGY_COLLECTION_SALE: "",
  STRATEGY_PRIVATE_SALE: "",
  STRATEGY_DUTCH_AUCTION: "",
  EXECUTION_MANAGER: "",
  CURRENCY_MANAGER: "",
  ORDER_VALIDATOR_V1: "",
};

const goerliAddresses: Addresses = {
  WETH: "0x3e655E1Fe53e6F83c594c700358814Ba63395fe8",
  ROYALTY_FEE_MANAGER: "0xC2028802D9DDbc6E1acb803BD49A5c00301e3B99",
  ROYALTY_FEE_REGISTRY: "0x3bd1ad18114d5e39102e30Ebe05061F74cc2E410",
  ROYALTY_FEE_SETTER: "0x877379F388445C3F9EFD5FdE9BBBaF1754E1aAaf",
  EXCHANGE: "0x0B4f92EF4Dda2817484A44368772D07896E5E657",
  TRANSFER_MANAGER_ERC721: "0xE026fb26dD6A2521AE4d7364779F6C3Fc7FC8Cb1",
  TRANSFER_MANAGER_ERC1155: "0x2e3B9DeD2Db6c86fcd47a554649fFEcB8D406B3f",
  TRANSFER_SELECTOR_NFT: "0x08dD4c06C53f365C1aC6bCCc0bcD811941f4ca96",
  STRATEGY_STANDARD_SALE: "0x2A8EDAfAd4cb09D6BB4697c593Dc9F0500FbF1cb",
  STRATEGY_COLLECTION_SALE: "0xFb18f7cb64ef67DE1C48C094Df25d0a411d9AB00",
  STRATEGY_PRIVATE_SALE: "0x2602C5b6282C50961258F2b9cb4c897bd5B09469",
  STRATEGY_DUTCH_AUCTION: "0x292ec999694a184EF91a09e67403319B65e895a2",
  EXECUTION_MANAGER: "0x92e612A411cdBB4522452D76f6F47535078C8E2f",
  CURRENCY_MANAGER: "0x48eCc81BE947061a56377E3361B4c6B3fe929c3A",
  ORDER_VALIDATOR_V1: "0xabF651082Edb60C8Fc0e0fCa12CD27170B2a0e1d",
};

const mumbaiAddress: Addresses = {
  WETH: "0x3e655E1Fe53e6F83c594c700358814Ba63395fe8",
  ROYALTY_FEE_MANAGER: "0xC2028802D9DDbc6E1acb803BD49A5c00301e3B99",
  ROYALTY_FEE_REGISTRY: "0x3bd1ad18114d5e39102e30Ebe05061F74cc2E410",
  ROYALTY_FEE_SETTER: "0x877379F388445C3F9EFD5FdE9BBBaF1754E1aAaf",
  EXCHANGE: "0x0B4f92EF4Dda2817484A44368772D07896E5E657",
  TRANSFER_MANAGER_ERC721: "0xE026fb26dD6A2521AE4d7364779F6C3Fc7FC8Cb1",
  TRANSFER_MANAGER_ERC1155: "0x2e3B9DeD2Db6c86fcd47a554649fFEcB8D406B3f",
  TRANSFER_SELECTOR_NFT: "0x08dD4c06C53f365C1aC6bCCc0bcD811941f4ca96",
  STRATEGY_STANDARD_SALE: "0x2A8EDAfAd4cb09D6BB4697c593Dc9F0500FbF1cb",
  STRATEGY_COLLECTION_SALE: "0xFb18f7cb64ef67DE1C48C094Df25d0a411d9AB00",
  STRATEGY_PRIVATE_SALE: "0x2602C5b6282C50961258F2b9cb4c897bd5B09469",
  STRATEGY_DUTCH_AUCTION: "0x292ec999694a184EF91a09e67403319B65e895a2",
  EXECUTION_MANAGER: "0x92e612A411cdBB4522452D76f6F47535078C8E2f",
  CURRENCY_MANAGER: "0x48eCc81BE947061a56377E3361B4c6B3fe929c3A",
  ORDER_VALIDATOR_V1: "0xabF651082Edb60C8Fc0e0fCa12CD27170B2a0e1d",
};

const polygonAddresses: Addresses = {
  WETH: "",
  ROYALTY_FEE_MANAGER: "",
  ROYALTY_FEE_REGISTRY: "",
  ROYALTY_FEE_SETTER: "",
  EXCHANGE: "",
  TRANSFER_MANAGER_ERC721: "",
  TRANSFER_MANAGER_ERC1155: "",
  TRANSFER_SELECTOR_NFT: "",
  STRATEGY_STANDARD_SALE: "",
  STRATEGY_COLLECTION_SALE: "",
  STRATEGY_PRIVATE_SALE: "",
  STRATEGY_DUTCH_AUCTION: "",
  EXECUTION_MANAGER: "",
  CURRENCY_MANAGER: "",
  ORDER_VALIDATOR_V1: "",
};

export const addressesByNetwork: { [chainId in SupportedChainId]: Addresses } = {
  [SupportedChainId.MAINNET]: mainnetAddresses,
  [SupportedChainId.GOERLI]: goerliAddresses,
  [SupportedChainId.MUMBAI]: mumbaiAddress,
  [SupportedChainId.HARDHAT]: goerliAddresses,
};
