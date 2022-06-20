---
title: IoTeX indexing & querying data API
LinkTitle: IoTeX
weight: 14
hidden: false
featuredImage: /static/images/networks/banners/IoTex.png
description: IoTeX is a blockchain-based platform, designed to become the decentralized backbone for Internet of Things applications.
favicon: iotex-logo

---

![IoTeX network banner](/static/images/networks/banners/IoTex.png)

# IoTeX

## Introduction

[IoTeX](https://iotex.io/) is a blockchain-based platform, designed to become the decentralized backbone for Internet of Things applications. 

With an ever-growing ecosystem of projects and products from DeFi to Tools to Gaming, IoTeX currently leads the world’s premier industry consortiums and standards bodies such as IEEE, IIC, and more. With numerous contributions to the Blockchain and IoT space, the IoTeX blockchain already powers real devices, including Ucam, an award-winning blockchain-powered cameras presented at the Consumer Electronics Show (CES) and the Pebble geo device. Pebble is a secure device designed by IoTeX and perfect for supply chain optimization in any industry. As a next step, IoTeX is launching "MachineFi" , to power next-gen IoT applications.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|IoTeX Mainnet chainId |`4689`|
|IoTeX Testnet chainId |`4690`|
|IoTeX Bridge |https://iotube.org/|
|IoTeX Blockchain Explorer |https://iotexscan.io/|
|Block time |~5 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the IoTeX mainnet and the testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<div>
  {{< open-api
      endpoint="Get token balances for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/4689"
  >}}
    {{< open-api
      endpoint="Get transactions for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/4689"
  >}}
    {{< open-api
      endpoint="Get ERC20 token transfers for address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/4689"
  >}}
      {{< open-api
      endpoint="Get token holders as of any block height"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/4689"
  >}}
      {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/4689"
  >}}
      {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/4689"
  >}}
</div>


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 
