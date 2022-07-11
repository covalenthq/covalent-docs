---
title: Polyjuice L2 indexing & querying data API
LinkTitle: Polyjuice
weight: 13
hidden: false
featuredImage: /static/images/networks/banners/Polyjuice.png
description: Polyjuice is an L2 network running on the Nervos blockchain. It is an Ethereum-compatible layer inside of an optimistic rollup, which allows for low cost, high speed transactions with a familiar user and developer experience.
favicon: nervos-polyjuice-testnet-logo
---

![Polyjuice network banner](/static/images/networks/banners/Polyjuice.png)

# Polyjuice L2 Network

## Introduction

Polyjuice is an L2 network running on the Nervos blockchain. It is an Ethereum-compatible layer inside of an optimistic rollup, which allows for low cost, high speed transactions with a familiar user and developer experience.

- Compatibility with Ethereum: developers are able to run Ethereum contracts and utilize Ethereum tooling with minimal changes

- Diverse wallet support: The Nervos "Universal Passport" allows users  to interact with Ethereum applications using familiar wallets, such as Metamask or TRON wallet

- Scalability and flexibility: moving computation off of the Nervos blockchain allows low cost contract execution and allows developers to make use of widely deployed and audited Solidity smart contracts
### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Polyjuice Mainnet chainId|`COMING SOON`|
|Polyjuice Testnet chainId|`71393`|
|Polyjuice Blockchain Explorer|`COMING SOON`|
|Block time|~1 minute|
|Data refresh latency | ~5 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the HECO mainnet and the HECO testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/71393"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/71393"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/71393"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/71393"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/71393"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/71393"
  >}}
</div>



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 


## Appendix


### Node Provider

https://docs.ankr.com/nodes/nervos