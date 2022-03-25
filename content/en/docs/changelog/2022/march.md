---
title: March 2022
weight: -15
hidden: false
description: 
---

## 2022-03-31

### ADDED

- We've added a new image field to our NFT market data endpoints which displays the first token image of any NFT collection. This simplifies the experience and reduces the number of API calls when creating a collection dashboard like the one you can see we recently released [here.](https://github.com/covalenthq/nft-dashboard-template/)
- SushiSwap DEX support has been added to our `XY=K` endpoints, and we've also extended its token price support for Harmony One blockchain
- Axie is now supported through the NFT market data endpoints, enabling users to query supported NFT data for the Ronin chain
- Mimo, a leading DEX on IoTeX, is now supported through our `XY=K` endpoints. This extends the price coverage for IoTeX beyond what CoinGecko currently supports. 
- The Harmony blockchain is now fully indexed! Users can query all on-chain data through our Class A endpoints. **Harmony Mainnet chainID: 1666600000. IoTeX Testnet chainID: 1666700000.**

### UPDATED

- We've made significant updates to our NFT endpoints `Get NFT market global view` and `Get historical data for NFT collection`. Supported chains and markets now include:

<table class="table table-auto border-collapse border border-t-2 border-l-2 border-r-2 border-covalent-purple-dark">
<thead>
  <tr class="border border-covalent-purple-dark">
   <th class=" text-xl border-covalent-purple-dark border-r-2 p-2 bg-covalent-purple-gradient text-white">
Chain</th>
   <th class=" text-xl border-covalent-purple-dark border-r-2 p-2 bg-covalent-purple-gradient text-white">
Markets</th>
</tr>
</thead>
<tbody>
<tr class="text-xl border border-covalent-purple-dark">
<td>Ethereum</td>
<td>OpenSea, Rarible, Foundation, Refinable, NFTrade, LooksRare, CryptoPunks, Zora, Aavegotchi</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Polygon</td>
<td>OpenSea, Refinable, NFTrade, Aavegotchi</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Avalanche</td>
<td>TofuNFT, NFTrade</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Fantom</td>
<td>Artion, TofuNFT</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Arbitrum</td>
<td>Treasure, TofuNFT</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Shiden</td>
<td>TofuNFT</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Moonbeam</td>
<td>TofuNFT, Moonbeans</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Moonriver</td>
<td>TofuNFT, NFTrade</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Harmony</td>
<td>**wait for info from Adam**</td>
</tr>
</tbody>
</table>

### BUG FIXES

- The issue of negative WETH balances in the `Get historical portfolio value over time` endpoint has been corrected. Users can be confident that this endpoint will continue to be improved. 

