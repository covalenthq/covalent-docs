---
title: Aurora Network
LinkTitle: Aurora
weight: 16
hidden: false
featuredImage: /static/images/networks/banners/Aurora.png
description: Aurora is an Ethereum Virtual Machine (EVM) implemented as a smart contract on NEAR Protocol..
favicon: nervos-polyjuice-testnet-logo
---

![Aurora network banner](/static/images/networks/banners/Aurora.png)

# Aurora Network

## Introduction
Aurora is an Ethereum Virtual Machine (EVM) implemented as a smart contract on NEAR Protocol.
Aurora is a solution, that allows developers to execute Ethereum contracts in a more performant environment: The NEAR blockchain. NEAR is a modern layer-1 blockchain which is fast with 2-3 second transaction finalization time, scalable, and carbon neutral. 

Aurora supports all tools available in the Ethereum ecosystem — MetaMask, Truffle, Hardhat, Remix, etc. Additionally, NEAR's trustless bridge to Ethereum means even the assets on Aurora are the same as Ethereum.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Aurora Mainnet chainId|`1313161554`|
|Aurora Blockchain Explorer|`https://aurorascan.dev`|
|Block time|~3 seconds|
|Data refresh latency | ~6 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Aurora mainnet. You can query the network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1313161554"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1313161554"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1313161554"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1313161554"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/1313161554"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1313161554"
  >}}
</div>



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 
# Appendix

[Rainbow Bridge](https://rainbowbridge.app/transfer) between or send within Ethereum, NEAR and Aurora
