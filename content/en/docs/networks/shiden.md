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

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/336"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/336"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/336"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/336"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/336"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/336"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Shiden token

The Shiden token `SDN` is the native token of the Shiden Network. This is similar to Ether in Ethereum. To interact with the Shiden Network, `SDN` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.