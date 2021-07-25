---
title: SpiritSwap Overview
order: 3
hidden: false
featuredImage: ../images/spiritswap-overview.png
description: A web application which gather various data such as pools, statistics, tokens, etc from the SpiritSwap DEX. 
---

![SpiritSwap Overview Banner](../images/spiritswap-overview.png)

&nbsp;

# SpiritSwap Overview

### Website

http://hackathon.quentingosset.com/

<Aside>

"Covalent is the only API that allows users to build concepts on the blockchain very quickly via the structure of the response data provided via the different endpoints. Moreover, a simple CURL call to a specific endpoint allows users to retrieve data that all have a unique JSON format which is much easier to work with!  Covalent `N°1`!"

</Aside>

&nbsp;

### Use of Covalent API

Spirit Swap Overview is a web application, which allows users to manage a multi-chain wallet to be able to analyze a user's portfolio without having to connect to all the user wallets manually. **1 interface => XXXXX wallets!**. 

&nbsp;

The multi-chain wallet: 
- Displays all the NFT that the user owns across multiple chains.
- Displays the list of his tokens.
- The overview of the value of his wallets
- The farming tokens and other features that are currently under construction.

&nbsp;

Then the web application also displays various data from external DEX. Here the [SpiritSwap](https://www.spiritswap.finance/) DEX has been implemented. A user can access the data of the different SpiritSwap pools, the general statistics of spiritswap, the tokens, etc

&nbsp;

All the data comes from the Covalent API which are called via CURL requests at each page load. Using a collection of endpoints:
- [`Get token balances for address`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/balances_v2/)
- [`Get external NFT metadata`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/tokens/{contract_address}/nft_metadata/{token_id}/)
- [Uniswap Clone Endpoints](https://www.covalenthq.com/docs/learn/guides/uniswap-clone/)

### Event

The project was built at [#OneMillionWallets - Fantom 2021](https://www.covalenthq.com/blog/omw-fantom-winners/)

&nbsp;

### Developers

- Quentin Gosset: _Discord - @StuxR#3487_
