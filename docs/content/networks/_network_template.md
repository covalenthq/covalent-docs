---
title: X Network
hidden: true
featuredImage: ./images/networks/Ethereum.png
description: Fully indexed and providing billions of rows of data at your fingertips. 
---

![Ethereum network banner](./images/networks/Ethereum.png)

# X Network

## Introduction

The [X Network](https://url) brings ...



### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|X Mainnet chainId|`137`|
|X Testnet chainId|`80001`|
|X Blockchain Explorer|https://explorer-mainnet.maticvigil.com/|
|Block time|~1 second|

</TableWrap>



### Quickstart overview video
<YouTube id="qhibXxKANWE"/>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the X mainnet and the X testnet. You can query either network via the unified API by changing the `chainId`.

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


### X Gas token

X token is the native token of the X network. This is similar to Ether in Ethereum. To interact with the X network, X tokens are required to pay as gas fees. Covalent's  responses automatically returns `gas_*` fields in the MATIC units.

### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the X chain. These addresses are used to reverse-lookup prices on X and also to return the right token logo urls.

Some example of mapped tokens:

|Token|Ethereum mainnet|X mainnet|
|---|---|---|
|USDT|0xdac17f958d2ee523a2206206994597c13d831ec7|0xc2132d05d31c914a87c6611c10748aeb04b58e8f|
|Uniswap UNI|0x1f9840a85d5af5bf1d1762f925bdaddc4201f984|0xb33eaad8d922b1083446dc23f610c2567fb5180f|


### Token prices

For tokens that have a mapping back to Ethereum mainnet, Covalent is able to return the mapped prices.