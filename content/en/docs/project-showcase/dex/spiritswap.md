---
title: SpiritSwap DEX
LinkTitle: SpiritSwap
hidden: false
weight: 1
featuredImage: /static/images/project-showcase/spiritswap/spiritswap-banner.png
description: DEX based on Uniswap's XY=K automated market maker on the Fantom network.
---

{{< dexPartnerDocsTemplate dex="SpiritSwap" apiReferenceChainName="Fantom" apiReferenceChain="250" website="https://info.spiritswap.finance/" >}}

## Resources
Here are some additional resources to help you get started with SpiritSwap and the Covalent API:
- [SpiritSwap App](https://app.spiritswap.finance?utm_source=covalent&utm_medium=partner-docs)
- [SpiritSwap Docs](https://docs.spiritswap.finance?utm_source=covalent&utm_medium=partner-docs)
- [SpiritSwap Discord](https://discord.com/invite/uYNsSCKcfT?utm_source=covalent&utm_medium=partner-docs)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=spiritswap&utm_medium=partner-docs)
- [Covalent API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=spiritswap&utm_medium=partner-docs)
- [Covalent Discord Support](https://www.covalenthq.com/discord/?utm_source=spiritswap&utm_medium=partner-docs)

<!-- ![SpiritSwap banner](/static/images/project-showcase/spiritswap/spiritswap-banner.png)
&nbsp;
# SpiritSwap
SpiritSwap is a decentralized exchange (DEX) on the Fantom Opera Chain. SpiritSwap's design is based on the Uniswap constant-product automated market maker (AMM). In an AMM, liquidity providers simply deposit a pair of tokens and an algorithm automatically makes markets for the token pair. Traders can easily swap between tokens in the AMM and get guaranteed rates for the swaps. Each swap on SpiritSwap incurs a fee, which gets distributed to liquidity providers as their payment for work.

![SpiritSwap App](/static/images/project-showcase/spiritswap/spiritswap-app.png)

&nbsp;
# Analytics powered by Covalent
Parts of SpiritSwap's analytics page are powered by the `XY=K` suite of Covalent API endpoints.

The Covalent API is RESTful and offers the following out-of-the-box for *SpiritSwap*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Base URL** | https://api.covalenthq.com/v1|
| **Networks & `chain_id`** | Fantom - `250` |
| **Key Endpoints** | - [Get SpiritSwap pools](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools/USD/250) <br> - [Get SpiritSwap network exchange tokens](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20network%20exchange%20tokens/USD/250) <br> - [Get SpiritSwap transactions for exchange](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20transactions%20for%20exchange/USD/250) <br> - [Get SpiritSwap ecosystem chart data](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20ecosystem%20chart%20data/USD/250)


## Details
Here is a breakdown of the the specific API endpoints that are used, or can be used, to build the SpiritSwap analytics page:

![SpiritSwap analytics](/static/images/project-showcase/spiritswap/spiritswap-analytics.png)

| Marker | Endpoint | Data |
| -------| ---------|------|
| 1 | [`/250/address/:address/transactions_v2`](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/250) | Timeseries TVL based on decoded `Deposit` and `Withdraw` events |
| 2 | [`/250/xy=k/spiritswap/pools/address/:address`](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools%20by%20address/USD/250) | 24h volume as a timeseries chart |
| 3 | [`/250/xy=k/spiritswap/tokens`](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20network%20exchange%20tokens/USD/250) | Top 50 tokens by price, volume, liquidity |
| 4 | [`/250/xy=k/spiritswap/pools`](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools/USD/250) | Top 50 pools by price, volume, liquidity |


## Try it Live

<div>
    {{< open-api
      endpoint="Get XY=K pools"
      link="https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools/USD/250"
  >}}
</div>

## Code Template
[![DEX Code Template](/static/images/project-showcase/spiritswap/dex-dashboard-spiritswap.png)](https://github.com/covalenthq/dex-dashboard-template)

Template repo: https://github.com/covalenthq/dex-dashboard-template

This code template is a showcase of the `XY=K` suite of Covalent API endpoints powering DEX dashboards such as SpiritSwap. The code is open source and forkable for anyone to customize it. -->

