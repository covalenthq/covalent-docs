---
title: Klaytn Network
LinkTitle: Klaytn
weight: 11
hidden: false
featuredImage: /static/images/networks/banners/Klaytn.png
description: Klaytn is an enterprise-grade, service-centric platform that brings user-friendly blockchain experience to millions.
favicon: klaytn-mainnet-logo
---

![Klaytn network banner](/static/images/networks/banners/Klaytn.png)

# Klaytn Network

## Introduction

The [Klaytn Network](https://klaytn.foundation/) is a global public blockchain platform developed by Ground X, the blockchain affiliate of the leading South Korean Internet company, Kakao.
Klaytn is a service-centric blockchain platform providing an intuitive development environment and friendly end-user experience. It is built upon solid reliability and significant stability with substantial service development for mass adoption.
The platform allows real-world applications of large scale to be produced right away so that our end-users can make full use of services without much expertise in blockchain or cryptocurrency.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|Klaytn Mainnet Cypress chainId|`8217`|
|Klaytn Blockchain Explorer|https://scope.klaytn.com/|
|Block time|~1 second|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the Klaytn mainnet `Cypress` and the Klaytn testnet `Baobab`. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/8217"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/8217"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/8217"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/8217"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/8217"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/8217"
  >}}
</div>


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 


## Appendix


### Klaytn Gas token

KLAY token is the native token of the Klaytn network. This is similar to Ether in Ethereum. To interact with the Klaytn network, KLAY tokens are required to pay as gas fees. KLAY serves as a means of payment and exchange for all applications running in the Klaytn ecosystem. Covalent's  responses automatically returns `gas_*` fields in the KLAY units.
