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
- **EVM Compatibility:** Cronos is built on Ethermint, which supports rapid porting of apps and smart contracts from Ethereum and other EVM-compatible chains.
- **Scalability:** Cronos aims to deliver faster, cheaper, and greener transactions and smart contract execution than proof of work chains.
- **Interoperability:** The Inter Blockchain Communications (IBC) protocol enables interoperability and bridging to other IBC-enabled chains, such as Cosmos Hub, Osmosis, etc.
- **Proof of Authority (POA):** Utilising POA as a more streamlined and scalable consensus mechanism while still maintaining security through a range of experienced and carefully-vetted validators.
- **Open Source:** High involvement of the community is welcomed to proactively review and provide suggestions to strengthen Cronos.


### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Cronos Mainnet|`25`|
|Cronos Blockchain Explorer|https://cronoscan.com/|
|Block time|~6 seconds|

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


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/#/0/0/USD/25?utm_source=cronos&utm_medium=network-docs">Go to Covalent's API Reference</a>

---

## Appendix

### Cronos token

The Cronos token `CRO` is the native token of the Cronos Chain, which is similar to Ether in Ethereum. To interact with Cronos, `CRO` tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.