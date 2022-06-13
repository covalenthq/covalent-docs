---
title: SpiritSwap DEX
LinkTitle: SpiritSwap
weight: 1
hidden: false
featuredImage: /static/images/project-docs/spiritswap.png
description: DEX based on Uniswap's XY=K automated market maker on the Fantom chain. 
favicon: ethereum-eth-logo
---

![SpiritSwap banner](../images/spiritswap.png)
&nbsp;
# SpiritSwap
SpiritSwap is a decentralized exchange (DEX) on the Fantom Opera Chain. SpiritSwap's design is based on the Uniswap constant-product automated market maker (AMM). In an AMM, liquidity providers simply deposit a pair of tokens and an algorithm automatically makes markets for the token pair. Traders can easily swap between tokens in the AMM and get guaranteed rates for the swaps. Each swap on SpiritSwap incurs a fee, which gets distributed to liquidity providers as their payment for work.

![SpiritSwap App](../images/SpiritSwapApp.png)

&nbsp;
# Analytics powered by Covalent
SpiritSwap's analytics page is powered by the `XY=K` suite of Covalent API endpoints.

The Covalent API is RESTful and offers the following out-of-the-box for *SpiritSwap*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Base URL** | https://api.covalenthq.com/v1|
| **Networks & `chain_id`** | Fantom - `250` |


Try the supported endpoints directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=spiritswap&utm_medium=partner-docs) or use the examples below.


## Details
Here is a breakdown of the the specific endpoints used to build the page:

![SpiritSwap analytics](../images/SpiritSwapDashboard.png)

|  |
| ----------- |
| <table><tr><th>#</th><th>Endpoint</th><th>Use Case</th><th>Data</th></tr><tr><td>1</td><td>`/250/address/:address/transactions_v2`</td><td>Display TVL as a timeseries</td><td>Decoded `Deposit` and `Withdraw` events</td></tr><tr><td>2</td><td>`/250/xy=k/spiritswap/pools/address/:address`</td><td>Display 24h volume as a timeseries chart</td><td>Volume timeseries</td></tr><tr><td>3</td><td>`/250/xy=k/spiritswap/tokens`</td><td>Display top 50 tokens by 24h volume</td><td>Token price, volume, liquidity</td></tr><tr><td>4</td><td>`/250/xy=k/spiritswap/pools`</td><td>Display top 50 pools by 24h volume</td><td>Pool price, volume, liquidity</td></tr></table>  |

## Try it Live

<div>
    {{< open-api
      endpoint="Get XY=K pools"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/250"
  >}}
</div>

## Code Template
[![DEX Code Template](../images/dex-dashboard-spiritswap.png)](https://github.com/covalenthq/dex-dashboard-template)

Template repo: https://github.com/covalenthq/dex-dashboard-template

This code template is a showcase of the `XY=K` suite of Covalent API endpoints powering a multi-chain DEX dashboard such as SpiritSwap. The code is open source and forkable for anyone to customize it.

&nbsp;
# Resources
Here are some additional resources to help you get started with SpiritSwap and the Covalent API:
- [SpiritSwap Docs](https://docs.spiritswap.finance/utm_source=covalent&utm_medium=partner-docs)
- [API Reference](https://covalenthq.com/docs/api/?utm_source=spiritswap&utm_medium=partner-docs)
- [API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=spiritswap&utm_medium=partner-docs)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=spiritswap&utm_medium=partner-docs)

&nbsp;
# About Covalent
{{< aboutCovalent >}}