---
title: Astar indexing & querying data API
LinkTitle: Astar
weight: 20
hidden: false
featuredImage: /static/images/networks/banners/Astar.png
description: Astar is a decentralized and cost efficient public chain that Ethereum developers can easily get started with and smart contracts are seamlessly compatible.
favicon: Astar-mainnet-logo
---

![Astar network banner](/static/images/networks/banners/Astar.png)

# Astar Network

## Introduction

[Astar](https://portal.astar.network/) Network is the Smart Contract Hub for WASM + EVM on Polkadot. Since winning its Parachain auction in January 2022, Astar Network has become the top Parachain in the Polkadot ecosystem in Total Value Locked and most Ethereum assets transferred over. Astar Network is the leading smart contract hub that connects the Polkadot ecosystem to Ethereum, Cosmos, and all major layer 1 blockchains. 

Astar Network supports dApps using multiple virtual machines — namely WASM and EVM — and offers the best technology solutions and financial incentives via its Build2Earn and Astar Incubation Program for Web3 developers to build on top of a secure, scalable, and interoperable blockchain.

The work of the community is maintained under a public domain license at https://github.com/AstarNetwork. 

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Astar Mainnet chainId|`592`|
|Astar Testnet chainId|`81`|
|Astar Blockchain Explorer|https://astar.subscan.io/|
|Block time|~12 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Astar mainnet and the Astar testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/592"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/592"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/592"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/592"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/592"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/592"
  >}}
</div>


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Astar token

The Astar token `ASTR` is the native token of the Astar Network. This is similar to Ether in Ethereum. To interact with the Astar Network, `ASTR` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.