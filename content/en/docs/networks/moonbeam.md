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

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1284"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1284"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1284"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1284"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/1284"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1284"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Moonbeam token

The Moonbeam token `GLMR` is the native token of the Moonbeam network. This is similar to Ether in Ethereum. To interact with the Moonbeam network, `GLMR` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.