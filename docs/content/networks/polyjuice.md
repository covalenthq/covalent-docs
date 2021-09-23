---
title: Polyjuice L2 Network
order: 13
hidden: false
featuredImage: ./images/Polyjuice.png
description: Polyjuice is an L2 network running on the Nervos blockchain. It is an Ethereum-compatible layer inside of an optimistic rollup, which allows for low cost, high speed transactions with a familiar user and developer experience.
---

![Polyjuice network banner](./images/Polyjuice.png)

# Polyjuice L2 Network

## Introduction

Polyjuice is an L2 network running on the Nervos blockchain. It is an Ethereum-compatible layer inside of an optimistic rollup, which allows for low cost, high speed transactions with a familiar user and developer experience.

- Compatibility with Ethereum: developers are able to run Ethereum contracts and utilize Ethereum tooling with minimal changes

- Diverse wallet support: The Nervos "Universal Passport" allows users  to interact with Ethereum applications using familiar wallets, such as Metamask or TRON wallet

- Scalability and flexibility: moving computation off of the Nervos blockchain allows low cost contract execution and allows developers to make use of widely deployed and audited Solidity smart contracts
### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Polyjuice Mainnet chainId|`COMING SOON`|
|Polyjuice Testnet chainId|`71393`|
|Polyjuice Blockchain Explorer|`COMING SOON`|
|Block time|~1 minute|
|Data refresh latency | ~5 seconds|

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


### Node Provider

https://docs.ankr.com/nodes/nervos