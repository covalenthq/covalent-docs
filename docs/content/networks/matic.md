---
title: Polygon/Matic indexing & querying data API
order: 2
hidden: false
featuredImage: ./images/Matic.png
description: Working together to bring massive scale to Ethereum
---

![Matic network banner](./images/Matic.png)

# Polygon / Matic Network

## Introduction

The [Polygon / Matic Network](https://matic.network/) brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains that provides a solution for faster and extremely low-cost transactions with finality on the main chain. The Matic system ensures liveliness using PoS checkpoints which are pushed to the Ethereum mainchain. This enables a single Matic sidechain to theoretically achieve `2^16` transactions per block, and possibly millions of transactions on multiple chains in the future.



### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Matic Mainnet chainId|`137`|
|Matic Mumbai Testnet chainId|`80001`|
|Matic Blockchain Explorer|https://explorer-mainnet.maticvigil.com/|
|Block time|~1 second|
|Data refresh latency|~12 seconds|
</TableWrap>



### Quickstart overview video
<YouTube id="qhibXxKANWE"/>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Matic mainnet and the Mumbai testnet. You can query either network via the unified API by changing the `chainId`.

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



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent API docs</a>

--- 


## Appendix


### Matic Gas token

MATIC token is the native token of the Matic network. This is similar to Ether in Ethereum. To interact with the Matic network, MATIC tokens are required to pay as gas fees. Covalent's  responses automatically returns `gas_*` fields in the MATIC units.

### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the Matic chain. These addresses are used to reverse-lookup prices on Matic and also to return the right token logo urls.

Some example of mapped tokens:

|Token|Ethereum mainnet|Matic mainnet|
|---|---|---|
|USDT|0xdac17f958d2ee523a2206206994597c13d831ec7|0xc2132d05d31c914a87c6611c10748aeb04b58e8f|
|Uniswap UNI|0x1f9840a85d5af5bf1d1762f925bdaddc4201f984|0xb33eaad8d922b1083446dc23f610c2567fb5180f|


### Token prices

For tokens that have a mapping back to Ethereum mainnet, Covalent is able to return the mapped prices.

### Infrastructure Providers
The following Covalent service providers provide infrastructure for this blockchain network:
* [Chainstack](../../service-providers/chainstack)
* [Ankr](../../service-providers/ankr)