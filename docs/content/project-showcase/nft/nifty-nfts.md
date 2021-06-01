---
title: Nifty NFTs
order: 4
hidden: false
author: anadi2311
updated: 2021-05-30
featuredImage: ../images/nifty-nfts.png
description: Twitter Bot showcasing inspiring NFTs and highlights the power of Covalent's API!
tags:
  - NFT
  - Alchemists
---

![Nifty NFTs Banner](../images/nifty-nfts.png)

&nbsp;
# Nifty NFTs

### Website
https://twitter.com/nifty_nfts

<Aside>

"It is impressive how rich in data and well structured Covalent's API is. It seems the more we work with it, the more ideas we get."

</Aside>

&nbsp;
### Use of Covalent API
We needed to query the Ethereum blockchain for a specific contract address and filter the results with a specific owner `(auction address)` in order to obtain the NFT id that is auctioned. We used the **GET TRANSACTIONS ENDPOINT** to obtain this information: `GET /v1/{chain_id}/address/{address}/transactions_v2/`

After getting the NFT ids, in order to post about them, we needed to extract the NFT metadata. We used the **GET NFTs Meta Data**:
`GET /v1/{chain_id}/tokens/{address}/nft_metadata/{token_id}/`

All extracted data was then used in JSON format.

&nbsp;
### Event
The project was built as part of the Covalent [Alchemist](https://www.covalenthq.com/ambassador/) Season 1.

&nbsp;
### Developers

- Corina Pascu: *Discord - @snowdot#8235*
- Samer Haidar: *Discord - @GodSamix#6189*

