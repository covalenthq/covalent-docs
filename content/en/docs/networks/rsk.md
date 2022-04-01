---
title: RSK indexing & querying data API
LinkTitle: RSK
weight: 8
hidden: false
featuredImage: /static/images/networks/banners/RSK.png
description: Support for RSK network
favicon: rsk-mainnet-logo
---

![Recipe logo](/static/images/networks/banners/RSK.png)

# RSK Network

## Introduction

[RSK](https://www.rsk.co/) is the first general purpose smart contract platform secured by the Bitcoin Network.
RSK’s Contracts goal is to add value and functionality to the bitcoin Contracts ecosystem by enabling smart contracts, near instant Contracts payments, and higher scalabiity.
RSK Blockchain is connected to Bitcoin through Merged
Contracts Mining and a two-way peg also known as the bridge.

The RSK blockchain is highly decentralised. RSK is merge-mined with Bitcoin, and has a hashpower that is second only to Bitcoin. As such, it is believed to be the most secure and censorship resistant smart contract platform. Refer to [RSK Stats](https://stats.rsk.co/) for the live value of the RSK hash rate.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|RSK Mainnet chainId|`30`|
|RSK Testnet chainId|`31`|
|RSK Blockchain Explorer|https://explorer.rsk.co/|
|Block time|https://stats.rsk.co/|

</TableWrap>

## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the RSK mainnet and testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/30"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/30"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/30"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/30"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/30"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/30"
  >}}
</div>


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 
## Appendix

### RIF Token Contract

[0x2acc95758f8b5f583470ba265eb685a8f45fc9d5](https://explorer.rsk.co/address/0x2acc95758f8b5f583470ba265eb685a8f45fc9d5)
### RSK Smart Contract Address Mapping

| Address | Ethereum mainnet                           | RSK                            |
| ----- | ------------------------------------------ | ------------------------------------------ |
| bridge  | 0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d | 0x9d11937e2179dc5270aa86a3f8143232d6da0e69 |
| federation   | 0x7eCfda6072942577D36F939aD528b366b020004b | 0x5e29C223d99648C88610519f96E85E627b3ABe17 |
| allowTokens  | 0xcB789036894a83a008a2AA5b3c2DDe41D0605A9A | 0xA3FC98e0a7a979677BC14d541Be770b2cb0A15F3 |
| multiSigWallet   | 0x040007b1804ad78a97f541bebed377dcb60e4138 | 0x040007b1804ad78a97f541bebed377dcb60e4138 |


Mainnet and Testnet address mapping reference [doc](https://github.com/rsksmart/tokenbridge/blob/master/docs/ContractAddresses.md) for Ethereum and RSK. 
