---
title: Shiden
order: 15
hidden: false
featuredImage: /static/images/networks/banners/Shiden.png
description: Support for the Shiden Network on Kusama parachain
---

![Shiden banner](/static/images/networks/banners/Shiden.png)

# Shiden Network

## Introduction

The [Shiden Network](https://shiden.astar.network/) is a scalable and interoperable infrastructure for Web3.0. Since the Shiden Network is built with [Parity’s Substrate framework](https://substrate.io/), it can be a future [Kusama](https://kusama.network/) parachain that also acts as a scalable smart contract platform. The Kusama Relaychain, by design, does not support smart contracts. This allows the Shiden Network the opportunity to fill in this gap. Scalability is obviously one of the most crucial demands dApp developers have. Ideally, the developers can build whatever applications on the Shiden Network without having to consider its scalability.

The Shiden Network is built on the Kusama parent chain.

### Quick facts

<TableWrap>

| Property              | Value                |
| --------------------- | -------------------- |
| Shiden          | `336`         |
| Blockchain Explorer|https://blockscout.com/shiden/|
| Block time            | ~20 seconds           |


</TableWrap>


## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Shiden Network. You can query the network via the unified API by changing the `chainId`.

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

### Shiden token

The Shiden token `SDN` is the native token of the Shiden Network. This is similar to Ether in Ethereum. To interact with the Shiden Network, `SDN` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.