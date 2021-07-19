---
title: Binance Smart Chain indexing & querying data API
order: 4
hidden: false
featuredImage: ./images/Binance.png
description: Supporting a faster, cheaper, EVM-compatible network
---

![BSC network banner](./images/Binance.png)

# Binance Smart Chain

## Introduction

[Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC) is best described as a blockchain that runs in parallel to the Binance Chain. Unlike Binance Chain, BSC boasts smart contract functionality and compatibility with the Ethereum Virtual Machine (EVM). The design goal here was to leave the high throughput of Binance Chain intact while introducing smart contracts into its ecosystem.

<!-- ### Overview Video
<YouTube id="kdwfIrRJ4DE"/> -->


### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|BSC Mainnet chainId|`56`|
|BSC Testnet chainId|`97`|
|BSC Blockchain Explorer|https://bscscan.com/|
|Block time|~5 seconds|

</TableWrap>

<!-- ### Quickstart overview video
<YouTube id="qhibXxKANWE"/> -->


## Supported endpoints

<Aside>

All [__Class A__](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the BSC mainnet. You can query either network via the unified API by changing the `chainId`.

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


### BNB Gas token

 The BNB token is the native token of the BSC network. This is similar to Ether in Ethereum. To interact with the BSC network, BNB tokens are required to pay as gas fees. The Covalent API response returns `gas_*` fields in fiat units.

### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the BSC chain. These addresses are used to reverse-lookup prices on BSC and also to return the right token logo urls.

Some example of mapped tokens:

|Token|Ethereum mainnet|BSC mainnet|
|---|---|---|
|USDT|0xdac17f958d2ee523a2206206994597c13d831ec7|0x55d398326f99059ff775485246999027b3197955|
|BAND|0xba11d00c5f74255f56a5e366f4f77f5a186d7f55|0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18|


### Token prices

For tokens that have a mapping back to Ethereum mainnet, Covalent is able to return the mapped prices.


### Infrastructure Providers
The following provide infrastructure for this blockchain network:
* [Chainstack](../../service-providers/chainstack)
* [Ankr](../../service-providers/ankr)
* [GetBlock](../../service-providers/getblock)