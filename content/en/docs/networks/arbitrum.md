---
title: Arbitrum indexing & querying data API
LinkTitle: Arbitrum
weight: 9
hidden: false
featuredImage: /static/images/networks/banners/Avalanche.png
description: Support for Arbitrum network
favicon: arbitrum-mainnet-logo
---

![Recipe logo](/static/images/networks/banners/Arbitrum.png)

# Arbitrum Network

## Introduction

[Arbitrum](https://developer.offchainlabs.com/docs/developer_quickstart) Arbitrum is an L2 scaling solution for Ethereum. It is a suite of Ethereum scaling solutions that enables high-throughput, low cost smart contracts while remaining trustlessly secure.Abitrum possesses the following features: 
- Trustless security: security rooted in Ethereum, with any one party able to ensure correct Layer 2 results
- Compatibility with Ethereum: able to run unmodified EVM contracts and unmodified Ethereum transactions
- Scalability: moving contracts’ computation and storage off of the main Ethereum chain, allowing much higher throughput
- Minimum cost: designed and engineered to minimize the L1 gas footprint of the system, minimizing per-transaction cost.
### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Arbitrum Mainnet chainId|`42161`|
|Arbitrum Testnet chainId|`421611`|
|Arbitrum Blockchain Explorer|https://explorer.offchainlabs.com/|

</TableWrap>


<!-- ### Quickstart overview video
<YouTube id="qhibXxKANWE"/> -->


## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Arbitrum mainnet and testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/42161"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/42161"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/42161"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/42161"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/42161"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/42161"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 