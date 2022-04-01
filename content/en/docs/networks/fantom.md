---
title: Fantom indexing & querying data API
LinkTitle: Fantom
weight: 5
hidden: false
featuredImage: /static/images/networks/banners/fantom.png
description: Support for Fantom network
favicon: fantom-ftm-logo
---

![Recipe logo](/static/images/networks/banners/fantom.png)

# Fantom Network

## Introduction

[Fantom](https://fantom.foundation/) is a fast, high-throughput open-source smart contract platform for digital assets and dApps.

Founded in 2018, Fantom is designed to overcome the limitations of previous-generation blockchain platforms. Fantom is permissionless, decentralized, and open-source while achieving fast finality (1-2 second transaction confirmation) and low fees ($0.00001). Furthermore, Fantom is EVM-compatible.

Fantom code is completely open source. Anyone can read it, check on the progress, comment on it, and contribute. Fantom integrates industry-leaders oracle providers Chainlink and Band Protocol for maximum flexibility to access price feeds.

### Quick facts

<TableWrap>

| Property              | Value                |
| --------------------- | -------------------- |
| Network name          | Fantom Opera         |
| Mainnet chainId       | `250`                |
| Testnet chainId       | `4002`                |
| Famtom Block Explorer | https://ftmscan.com/ |
| Block time            | ~2 seconds           |


</TableWrap>

## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Fantom mainnet and testnet. You can query the network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/250"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/250"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/250"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/250"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/250"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/250"
  >}}
</div>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Fantom token

The Fantom token `FTM` is the native token of Fantom. This is similar to Ether in Ethereum. To interact with the Fantom network, FTM tokens are required to pay gas fees. The Covalent API response returns `gas_*` fields in fiat units.

### Token mapping

Covalent maintains an on-chain real-time mapping of token addresses between Ethereum mainnet and the Fantom-Opera chain. These addresses are used to reverse-lookup prices on Fantom and also to return the right token logo urls.

Some example of mapped tokens:

| Token | Ethereum mainnet                           | Fantom mainnet                             |
| ----- | ------------------------------------------ | ------------------------------------------ |
| USDT  | 0xdac17f958d2ee523a2206206994597c13d831ec7 | 0x1ffbd1e3584f139ca42d77ef99ef99550ecf46a8 |
| YFI   | 0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e | 0xc396b190f251d7f79c583fd06347a09781f085c9 |

For the current token mapping list, see: https://netapi.anyswap.net/bridge/v2/info

### Token prices

For tokens that have a mapping back to Ethereum mainnet, the Covalent API is able to return the mapped prices.

### Infrastructure Providers
The following provide infrastructure for this blockchain network:
* [Chainstack](../../service-providers/chainstack)