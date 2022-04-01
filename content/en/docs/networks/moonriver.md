---
title: Moonriver indexing & querying data API
LinkTitle: Moonriver
weight: 7
hidden: false
featuredImage: /static/images/networks/banners/Moonriver.png
description: Support for the Moonriver network
favicon: moonbeam-logo
---

![Moonriver banner](/static/images/networks/banners/Moonriver.png)

# Moonriver Network

## Introduction

[Moonriver](https://moonbeam.network/networks/moonriver/) is an Ethereum-compatible Solidity Smart Contracts Parachain on Kusama.

Moonriver is a companion network to Moonbeam and provides a permanently incentivized canary network. New code ships to Moonriver first, where it can be tested and verified under real economic conditions. Once proven, the same code ships to Moonbeam on Polkadot. Moonriver is a Community-Led Sister Parachain on Kusama.


### Quick facts

<TableWrap>

| Property              | Value                |
| --------------------- | -------------------- |
| Moonriver Kusama (not live yet) | `1285` |
| Blockchain Explorer|https://blockscout.moonriver.moonbeam.network/|


</TableWrap>

#### Independent Network

While Moonbeam code launches to Moonriver first, the network will continue to live on as a parachain on Kusama, with its own projects and specialized use cases.

#### Network Launch Status

Moonriver will follow a similar launch process as Kusama and Polkadot to ensure the stability of the network while it is deployed. This [page](https://moonbeam.network/networks/moonriver/launch/) contains the updates as each launch phase of the Moonriver Network is completed.



## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints will be supported for the Moonriver network. You can query the network via the unified API by changing the `chainId` when it has been fully indexed.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1285"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1285"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1285"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1285"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/1285"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1285"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Moonriver token

Moonriver’s native cryptocurrency, `MOVR`, should play a key role in maintaining and operating the Moonriver network. It is expected to be used for paying transaction fees, supporting smart contract execution, incentivizing collators for producing blocks to support the network, and facilitating Moonriver’s on-chain governance mechanism.