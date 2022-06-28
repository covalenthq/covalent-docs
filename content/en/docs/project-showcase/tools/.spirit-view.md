---
title: Spirit View
order: 1  
hidden: false
author: emmaodia
updated: 2021-05-30
featuredImage: ./static/images/project-showcase/banners/spirit-view.png
description: FTM Scan is an address scanner that fetches the balance, transactions and NFTs on Fantom Opera (Mainnet) and Testnet.
tags: 
  - DeFi
  - Independent Projects
---

![FTM Scan Banner](/static/images/project-showcase/banners/spirit-view.png)

&nbsp;
# Spirit View

### Website
https://spiritview.moonlabs.xyz/

<Aside>

"The Covalent API is very rich and powerful as it provides all the data of multiple chains in details, our experience with it is really good as we are able to query multiple chains and get any data we want."

</Aside>

&nbsp;

### Use of Covalent API
Spirit View is a fully functional web application that queries the Fantom network.
The application retrieves all data for the top liquidity pools on the Decentralized Exchange [SpiritSwap](https://www.spiritswap.finance/) and computes the OHLC (also known as Open, High, Low, Close) for the price, counts the number of swaps, the volume and the liquidity for each individual pair.

The main features of the application are:
- All data is displayed for each individual pair since it's creation.
- It allows the user to drag and drop the pair in order to compare them more easily. Drag and drop functionality can also be done using the keyboard keys.
- It allows the user to view data in more granular details by providing different time intervals for each chart, such as: 1H, 2H, and on different scales, like: `Linear`, `Logarithmic` and `Percentage`.
- The app is fully responsive and mobile friendly.  

All data is provided by Covalent API and we used the below endpoints.
- [`Get Log events by contract address`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/address/{address}/) To get the `swaps` for each pool.
- [`Get Log events by topic hash(es)`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/topics/{topic}/) To get the `transfers`, `adds/removes` for each pool.

&nbsp;

### Event
The project was built at [#OneMillionWallets - Fantom 2021](https://www.covalenthq.com/blog/omw-fantom-winners/)

&nbsp;

### Developers

- Corina Pascu: *Discord - @snowdot#8235*
- Samer Haidar: *Discord - @GodSamix#6189*
