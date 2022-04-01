---
title: Binance Smart Chain indexing & querying data API
LinkTitle: BSC
weight: 4
hidden: false
featuredImage: /static/images/networks/banners/Binance.png
description: Supporting a faster, cheaper, EVM-compatible network
favicon: binance-coin-bnb-logo
---

![BSC network banner](/static/images/networks/banners/Binance.png)

# Binance Smart Chain

## Introduction

[Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC) is best described as a blockchain that runs in parallel to the Binance Chain. Unlike Binance Chain, BSC boasts smart contract functionality and compatibility with the Ethereum Virtual Machine (EVM). The design goal here was to leave the high throughput of Binance Chain intact while introducing smart contracts into its ecosystem.

<!-- ### Overview Video
<YouTube id="kdwfIrRJ4DE"/> -->


### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|BSC Mainnet chainId|`56`|
|BSC Testnet chainId|`97`|
|BSC Blockchain Explorer|https://bscscan.com/|
|Block time|~5 seconds|

</TableWrap>

<!-- ### Quickstart overview video
<YouTube id="qhibXxKANWE"/> -->


## Supported endpoints

<Aside>

All [__Class A__](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the BSC mainnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/56"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/56"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/56"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/56"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/56"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/56"
  >}}
</div>



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 

## Appendix


### BNB Gas token

 The BNB token is the native token of the BSC network. This is similar to Ether in Ethereum. To interact with the BSC network, BNB tokens are required to pay as gas fees. The Covalent API response returns `gas_*` fields in fiat units.

### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the BSC chain. These addresses are used to reverse-lookup prices on BSC and also to return the right token logo urls.

Some example of mapped tokens:

|Token|Ethereum mainnet|BSC mainnet|
|---|---|---|
|USDT|0xdac17f958d2ee523a2206206994597c13d831ec7|0x55d398326f99059ff775485246999027b3197955|
|BAND|0xba11d00c5f74255f56a5e366f4f77f5a186d7f55|0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18|


### Token prices

For tokens that have a mapping back to Ethereum mainnet, Covalent is able to return the mapped prices.


### Infrastructure Providers
The following provide infrastructure for this blockchain network:
* [Chainstack](../../service-providers/chainstack)
* [Ankr](../../service-providers/ankr)
* [GetBlock](../../service-providers/getblock)