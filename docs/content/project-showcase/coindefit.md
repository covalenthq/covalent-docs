---
title: Coin Defit
order: 4
hidden: false
featuredImage: ./images/coindefit-banner.png
description: Know how much profit you would have made in a Uniswap pool
---

![Coin Defit Banner](./images/coindefit-banner.png)

&nbsp;
# Coin Defit

### Website
https://coindefit.com/

<Aside>

"The Covalent API documentation site makes it possible to analyse API data anywhere, even on mobile. This is because the documentation site makes it possible to try the API directly from the documentation, without using API tools like cURL or Postman. Also, using Covalent is FREE."

</Aside>

&nbsp;
### Use of Covalent API
The data was used in JSON format.

The `/v1/{chain_id}/events/topics/{topic}/` endpoint was used with `chain_id = 1`, and Uniswap Sync and Uniswap Swap events topic hashes for the {topic}s.

The total trades (swaps) and liquidity balances at the end of the day were then extracted from the returned data and stored.

The app then calculates the fees (0.03% of the trades) and profit (based on amount provided, out of liquidity) and displays all of them on a rankable/sortable table.

Daily, the app queries the Covalent API for each previous day's swaps and syncs, extracts the volume and liquidity balances respectively, and calculates the fees. The app then stores all the data for continuous updated data display in its frontend.

&nbsp;
### Event
The project was built as an independent developer project. 

&nbsp;
### Developers

- Maxwell Oko: *Discord - ste#3927*

