---
title: Avalanche indexing & querying data API
LinkTitle: Avalanche
weight: 3
hidden: false
featuredImage: /static/images/networks/banners/Avalanche.png
description: Support for both Avalanche and Fuji C-Chain networks
favicon: avalanche-avax-logo

---

![Recipe logo](/static/images/networks/banners/Avalanche.png)

# Avalanche Network
[Covalent is supporting subnets!](https://www.covalenthq.com/blog/covalent-chainstack-avalanche-subnets/
)

## Introduction

[Avalanche](https://docs.avax.network/) is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. Avalanche is the first smart contracts platform that processes 4,500+ transactions/second and instantly confirms transactions. Ethereum developers can quickly build on Avalanche as Solidity works out-of-the-box.

A key difference between Avalanche and other decentralized networks is the consensus protocol. Over time, people have come to a false understanding that blockchains have to be slow and not scalable. The Avalanche protocol employs a novel approach to consensus to achieve its strong safety guarantees, quick finality, and high-throughput, without compromising decentralization.


### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Avalanche Mainnet C-Chain chainId|`43114`|
|Fuji Testnet C-Chain chainId|`43113`|
|Avalanche C-Chain Blockchain Explorer|https://cchain.explorer.avax.network/|
|Block time|~3 seconds|

</TableWrap>

## Supported endpoints

<Aside>

All [__Class A__](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Avalanche mainnet and the Fuji testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/43114"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/43114"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/43114"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/43114"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/43114"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/43114"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 


## Appendix


### AVAX Gas token

The AVAX token is the native token of Avalanche. This is similar to Ether in Ethereum. To interact with Avalanche, AVAX tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.

### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the Avalanche C-chain. These addresses are used to reverse-lookup prices on Avalanche and also to return the right token logo urls.

Some example of mapped tokens:

|Token|Ethereum mainnet|Avalanche mainnet|
|---|---|---|
|Uniswap UNI|0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984|0xdF3aCC3460965996FF496Cb9D0CF9E6859545a86|
|AAVE|0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9|0x217446Ce09AA183a9034f4FF20d31b9268427187|

For the current token mapping list, see: https://github.com/ava-labs/bridge-tokens/blob/main/data/eth_token_mapping.csv

### Token prices

For tokens that have a mapping back to Ethereum mainnet, Covalent is able to return the mapped prices.

### Infrastructure Providers

The following provide infrastructure for this blockchain network:
* [Chainstack](../../service-providers/chainstack)