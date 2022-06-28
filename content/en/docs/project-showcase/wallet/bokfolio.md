---
title: Bokfolio
hidden: false
weight: 2
featuredImage: /static/images/project-showcase/banners/BokFolio.png
description: Simple and efficient way to keep track of wallets on the Binance Smart Chain in fiat currency.
---

![Bokfolio Banner](/static/images/project-showcase/banners/BokFolio.png)

&nbsp;

# Bokfolio

### Website

https://bokfolio.springbokcrypto.com/

<Aside>

"Absolutely love the fact that the Covalent API is free to use, which opens it up to a lot of developers!"

</Aside>

&nbsp;

![Bokfolio Asset](/static/images/project-showcase/bokfolio-asset.png)

**Simple and efficient way to keep track of your own and other wallets on the Binance Smart Chain in multiple fiat currencies other than USD and without having to connect your wallets.**

### Use of Covalent API

All Covalent data parsed in JSON format.

We call [Get token balances for address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/balances_v2/) periodically to get all tokens in a wallet.

We also use the endpoint [Get transactions](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/transactions_v2/) to get transactions for a user's wallet.

As we expand on the features of our app we will be using more endpoints of the covalent API, including:
- Pulling NFT data with the [Get token balances for address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/balances_v2/) commonly called the `balances_v2` endpoint. 
- Managing a wallet assets using [Get historical portfolio value over time](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/portfolio_v2/)
- Managing Profit/Loss portfolio history using [Get historical prices by addresses v2](https://www.covalenthq.com/docs/api/#get-/v1/pricing/historical_by_addresses_v2/{chain_id}/{quote_currency}/{contract_addresses}/)

&nbsp;

### Event

The project was built as an independent developer project.

&nbsp;

### Developers

- Slavbok: _Discord - @BlavBok#9379_ 


Co-founder of Springbok Crypto. Slavbok has experience with UI and digital art. She's the one behind all of the graphics, logo, UI and branding of springbok crypto.   Slavbok's passion for blockchain technology started when she decided to make crypto trading her full time job. She's been involved with the crypto space ever since and is excited to make products that will make crypto trading that much simpler!