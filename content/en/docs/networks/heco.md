---
title: Heco Network
LinkTitle: Heco
weight: 12
hidden: false
featuredImage: /static/images/networks/banners/Heco.png
description: HECO is a decentralized and cost efficient public chain that Ethereum developers can easily get started with and smart contracts are seamlessly compatible.
favicon: heco-mainnet-logo
---

![HECO network banner](/static/images/networks/banners/Heco.png)

# Huobi ECO - HECO Network

## Introduction

[Huobi ECO Network](https://www.hecochain.com/en-us/) HECO is a decentralized and cost efficient public chain that Ethereum developers can easily get started with and smart contracts are seamlessly compatible.

HECO has built a developed Defi ecosystem, with wallets, assets, and applications rankings. Users can easily experience the latest DApps.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|HECO Mainnet chainId|`128`|
|HECO Testnet chainId|`256`|
|HECO Blockchain Explorer|https://hecoinfo.com/|
|Block time|~3 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the HECO mainnet and the HECO testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/128"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/128"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/128"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/128"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/128"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/128"
  >}}
</div>



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 


## Appendix


### HECO Gas token

HT token is the native token of the HECO network. This is similar to Ether in Ethereum. To interact with the HECO network, HT tokens are required to pay as gas fees. HT serves as a means of payment and exchange for all applications running in the HECO ecosystem. Covalent's  responses automatically returns `gas_*` fields in the HT units.
