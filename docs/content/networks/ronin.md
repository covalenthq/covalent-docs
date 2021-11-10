---
title: Ronin Network
order: 14
hidden: true
featuredImage: ./images/Ronin.png
description: Ronin is an Ethereum-linked sidechain made specifically for Axie Infinity. A Ronin was a samurai without a master in feudal Japan and Ronin represents the Axie desire to take the destiny of our product into our own hands.
---

![Ronin network banner](./images/Ronin.png)

# Ronin Network

## Introduction

Axie Infinity is a Pokémon-inspired universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets. Axie was built as a fun and educational way to introduce the world to blockchain technology.

In order for Axie Infinity to reach omore connections (the friends and family of our friends and family of users) Axie is building a long term solution that makes participating in the Axie game & economy, fast, cheap, and seamless: Ronin.

Ronin is an Ethereum-linked sidechain made specifically for Axie Infinity. A Ronin was a samurai without a master in feudal Japan and Ronin represents the Axie desire to take the destiny of our product into our own hands.


### Quick facts

<TableWrap>

|Property|Value|
|---|---|
| Network name          | Axie/Ronin         |
| Mainnet chainId       | `2020`                |
|Ronin Bridge|https://bridge.roninchain.com/|
|Ronin Blockchain Explorer|https://explorer.roninchain.com/|


</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Ronin mainnet. You can query either network via the unified API by changing the `chainId`.

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

### Axie Token

Axie Infinity Shards(AXS) are an ERC-20 governance token for the Axie Universe. AXS holders will be able to claim rewards if they stake their tokens, play the game, and participate in key governance votes. Players will also be able to earn $AXS when they play various games within the Axie Infinity Universe and through user-generated content initiatives.
