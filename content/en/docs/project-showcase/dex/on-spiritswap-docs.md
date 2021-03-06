---
title: SpiritSwap DEX
LinkTitle: SpiritSwap
_build:
  list: false
featuredImage: /static/images/project-showcase/spiritswap-banner.png
description: DEX based on Uniswap's XY=K automated market maker on the Fantom network.
livePage: https://docs.spiritswap.finance/spirit-swap/howto/pull-spiritswap-data-feeds-using-covalent-api
---

{{< onDexPartnerDocsTemplate dex="SpiritSwap" apiReferenceChainName="Fantom" apiReferenceChain="250" website="https://info.spiritswap.finance/" >}}

<!-- # Covalent

[Covalent](https://www.covalenthq.com/?utm_source=spiritswap&utm_medium=partner-docs) provides a unified API to bring full transparency and visibility to assets across all blockchains. The Covalent API is used to power parts of the [SpiritSwap analytics dashboard](https://info.spiritswap.finance/). 

To get started, sign up for a [**Covalent API Key**](https://www.covalenthq.com/platform/?utm_source=cronos&utm_medium=partner-docs). 

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](https://www.covalenthq.com/static/images/partner-docs/developer_mode.png) | ![Analyst Mode](https://www.covalenthq.com/static/images/partner-docs/analyst_mode.png)|

The Covalent API is RESTful and offers the following out-of-the-box for *SpiritSwap*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Base URL** | https://api.covalenthq.com/v1|
| **Networks & `chain_id`** | Fantom - `250` |
| **Key Endpoints** | - [Get SpiritSwap pools](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools/USD/250) <br> - [Get SpiritSwap network exchange tokens](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20network%20exchange%20tokens/USD/250) <br> - [Get SpiritSwap transactions for exchange](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20transactions%20for%20exchange/USD/250) <br> - [Get SpiritSwap ecosystem chart data](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20ecosystem%20chart%20data/USD/250)


Try the supported endpoints directly in your browser from the [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=spiritswap&utm_medium=partner-docs).


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

This code template is a showcase of the `XY=K` suite of Covalent API endpoints powering DEX dashboards such as SpiritSwap. The code is open source and forkable for anyone to customize it.

&nbsp;
# Resources
Here are some additional resources to help you get started with the Covalent API:
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=spiritswap&utm_medium=partner-docs)
- [Covalent API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=spiritswap&utm_medium=partner-docs)
- [Covalent Discord Support](https://www.covalenthq.com/discord/?utm_source=spiritswap&utm_medium=partner-docs) -->

## About Covalent
{{< aboutCovalent >}}