---
title: Moonbeam indexing & querying data API
LinkTitle: Moonbeam
weight: 6
hidden: false
featuredImage: /static/images/networks/banners/Moonbeam.png
description: Support for the Moonbeam network
favicon: moonbeam-logo
---

![Moonbeam banner](/static/images/networks/banners/Moonbeam.png)

# Moonbeam Network

## Introduction

[Moonbeam](https://moonbeam.network/) is an Ethereum-compatible smart contract parachain on Polkadot. 

Moonbeam is much more than just an EVM implementation: it’s a highly specialized Layer 1.5 chain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more. The Moonbeam platform extends the base Ethereum feature set with additional features such as on-chain governance, staking, and cross-chain integrations.



### Quick facts

<TableWrap>

| Property              | Value                |
| --------------------- | -------------------- |
| Moonbeam Testnet Moonbase Alpha chainId          | `1287`         |
| Moonbeam Polkadot            | `1284`                |
| [Moonriver Kusama](/docs/networks/moonriver) | `1285` |
| Blockchain Explorer|https://moonbase-blockscout.testnet.moonbeam.network/|
| Block time            | ~2 seconds           |
| Data refresh latency|~12 seconds|


</TableWrap>


## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Moonbeam network. You can query the network via the unified API by changing the `chainId`.

</Aside>

<!-- <Definitions>

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

</Definitions> -->

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-balances-for-address/lng=en"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-transactions-for-address/lng=en"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-a-block/lng=en"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-holders-as-of-any-block-height/lng=en"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-contract-address/lng=en"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-topic-hash(es)/lng=en"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Moonbeam token

The Moonbeam token `GLMR` is the native token of the Moonbeam network. This is similar to Ether in Ethereum. To interact with the Moonbeam network, `GLMR` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.