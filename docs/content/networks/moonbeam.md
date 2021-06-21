---
title: Moonbeam indexing & querying data API
order: 6
hidden: false
featuredImage: ./images/Moonbeam.png
description: Support for the Moonbeam network
---

![Moonbeam banner](./images/Moonbeam.png)

# Moonbeam Network

## Introduction

[Moonbeam](https://moonbeam.network/) is an Ethereum-compatible smart contract parachain on Polkadot. 

Moonbeam is much more than just an EVM implementation: it’s a highly specialized Layer 1.5 chain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more. The Moonbeam platform extends the base Ethereum feature set with additional features such as on-chain governance, staking, and cross-chain integrations.



### Quick facts

<TableWrap>

| Property              | Value                |
| --------------------- | -------------------- |
| Moonbeam Testnet Moonbase Alpha chainId          | `1287`         |
| Moonbeam Polkadot (not live yet)             | `1284`                |
| Moonriver Kusama (not live yet) | `1285` |
| Blockchain Explorer|https://moonbase-blockscout.testnet.moonbeam.network/|
| Block time            | ~2 seconds           |
| Data refresh latency|~12 seconds|


</TableWrap>


## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Moonbeam network. You can query the network via the unified API by changing the `chainId`.

</Aside>

<Definitions>

- `api.covalenthq.com/v1/{chainId}/address/{address}/balances_v2/`

  - Get token balances for `address`. Return a list of all ERC20 and NFT token balances including ERC721 and ERC1155 along with their current spot prices.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transactions_v2/`

  - Retrieve all transactions for `address` including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the address.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transfers_v2/`

  - Get ERC20 token transfers for `address` along with historical token prices.

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

### Moonbeam token

The Moonbeam token `GLMR` is the native token of the Moonbeam network. This is similar to Ether in Ethereum. To interact with the Moonbeam network, `GLMR` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.

<!-- ### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the Moonbeam network. These addresses are used to reverse-lookup prices on Moonbeam and also to return the right token logo urls.

Some example of mapped tokens:

| Token | Ethereum mainnet                           | Moonbeam                             |
| ----- | ------------------------------------------ | ------------------------------------------ |
| USDT  | 0xdac17f958d2ee523a2206206994597c13d831ec7 | 0x1ffbd1e3584f139ca42d77ef99ef99550ecf46a8 |
| YFI   | 0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e | 0xc396b190f251d7f79c583fd06347a09781f085c9 |

For the current token mapping list, see: 

### Token prices

For tokens that have a mapping back to Ethereum mainnet, Covalent is able to return the mapped prices. -->
