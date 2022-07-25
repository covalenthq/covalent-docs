---
title: Evmos indexing & querying data API
LinkTitle: Evmos
weight: 18
hidden: false
featuredImage: /static/images/networks/banners/Evmos.png
description: Evmos is an application-agnostic Cosmos chain that will be interoperable with the Ethereum mainnet.
---

![Evmos network banner](/static/images/networks/banners/Evmos.png)

# Evmos

## Introduction

Evmos is a scalable and interoperable Ethereum compatible network. It is built on the consensus mechanism of Proof-of-Stake with fast-finality. Evmos is an application-agnostic Cosmos chain that will be interoperable with the Ethereum mainnet, and Ethereum Virtual Machine (EVM) compatible environments, and other Byzantine Fault Tolerance (BFT) chains via Inter-Blockchain Communication (IBC), making it easy for users and developers to interact seamlessly between chains. Evmos aims to be the EVM Hub of Cosmos, making it easy for smart contracts to deploy and communicate within the Cosmos ecosystem.

### Evmos on the EVM
The Evmos Network does not have any EVM transactions prior to the Block Height `58700` for Mainnet and `738550` for Testnet. Therefore when querying the Evmos chain via the Covalent API, the Evmos Mainnet responses are indexed from block height `58700` to the `latest` Block Height.
The Evmos Testnet state response begins from Block Height `738550` to the `latest` Block Height.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Evmos Testnet chainId|`9000`|
|Cosmos Blockchain Explorer|explorer.evmos.org|
|Block time|~7 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Evmos mainnet and the Evmos testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/9000"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/9000"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/9000"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/9000"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/9000"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/9000"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 
