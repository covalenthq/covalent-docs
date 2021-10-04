---
title: Heco Network
order: 12
hidden: false
featuredImage: ./images/Heco.png
description: HECO is a decentralized and cost efficient public chain that Ethereum developers can easily get started with and smart contracts are seamlessly compatible.
---

![HECO network banner](./images/Heco.png)

# Huobi ECO - HECO Network

## Introduction

[Huobi ECO Network](https://www.hecochain.com/en-us/) HECO is a decentralized and cost efficient public chain that Ethereum developers can easily get started with and smart contracts are seamlessly compatible.

HECO has built a developed Defi ecosystem, with wallets, assets, and applications rankings. Users can easily experience the latest DApps.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|HECO Mainnet chainId|`128`|
|HECO Testnet chainId|`256`|
|HECO Blockchain Explorer|https://hecoinfo.com/|
|Block time|~3 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the HECO mainnet and the HECO testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>


<Definitions>

- `api.covalenthq.com/v1/{chainId}/address/{address}/balances_v2/` 
  - Get token balances for `address`. Return a list of all ERC20 and NFT token balances including ERC721 and ERC1155 along with their current spot prices.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transactions_v2/` 
  - Retrieve all transactions for `address` including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the address.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transfers_v2/` 
  - Get ERC20 token transfers for `address` alongwith historical token prices.

- `api.covalenthq.com/v1/{chainId}/tokens/{contract_address}/token_holders/` 
  - Return a paginated list of token holders `contract_address` as of any historical block height.

- `api.covalenthq.com/v1/{chainId}/events/address/{contract_address}/` 
  - Return a paginated list of decoded log events emitted by a particular smart contract.

- `api.covalenthq.com/v1/{chainId}/events/topics/{topic}/` 
  - Return a paginated list of decoded log events with one or more topic hashes separated by a comma.

</Definitions>



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 


## Appendix


### HECO Gas token

HT token is the native token of the HECO network. This is similar to Ether in Ethereum. To interact with the HECO network, HT tokens are required to pay as gas fees. HT serves as a means of payment and exchange for all applications running in the HECO ecosystem. Covalent's  responses automatically returns `gas_*` fields in the HT units.
