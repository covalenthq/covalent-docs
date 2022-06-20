---
title: Cronos indexing & querying data API
LinkTitle: Cronos
weight: 21
hidden: false
featuredImage: /static/images/networks/banners/Cronos.png
description: Cronos is the first Ethereum-compatible blockchain network built on Cosmos SDK technology
favicon: cronos-mainnet-logo
---

![Cronos network banner](/static/images/networks/banners/Cronos.png)

# Cronos

## Introduction

[Cronos](https://cronos.org/?utm_source=covalent&utm_medium=network-docs) is the first Ethereum-compatible blockchain network built on Cosmos SDK technology. An open-source and permission-less Layer 1 chain which runs in parallel to the Crypto.org Chain, Cronos aims to massively scale the DeFi, GameFi, and overall Web3 user community by providing builders with the ability to instantly port apps and crypto assets from other chains while benefiting from low transaction fees, high throughput, and fast finality. 

Key reasons to use Cronos include:
- EVM Compatible - Built on Ethermint, which supports rapid porting of apps & smart contracts from Ethereum and other EVM-compatible chains
- Scalable- Cronos can process more transactions per minute than Ethereum, making it faster, cheaper, and greener to execute smart contracts
- Interoperable - The Inter Blockchain Communications (IBC) protocol enables interoperability and bridging to the Crypto.org Chain, and other IBC-enabled chains, such as Cosmos Hub
- Proof of Authority (POA)- A more streamlined and scalable consensus mechanism consensus protocol while still maintaining security with a range of validators that many different parties run
- Open Source - Open for the community to review and provide suggestions to strengthen Cronos

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Cronos Mainnet|`25`|
|Cronos Blockchain Explorer|https://cronos.org/explorer/|
|Block time|~8 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Cronos Mainnet. You can query the chain via the unified Covalent API by using the `chainId` of `25`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/25"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/25"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/25"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/25"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/25"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/25"
  >}}
</div>


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Cronos token

The Cronos token `CRO` is the native token of the Cronos Chain, which is similar to Ether in Ethereum. To interact with Cronos, `CRO` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.