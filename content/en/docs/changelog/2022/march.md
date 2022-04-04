---
title: March 2022
weight: -15
hidden: false
description: New DEXs added to XY=K endpoints, NFT market data updates and expansion. 
---

## 2022-03-31

### ADDED

- We've added a new image field to our NFT market data endpoints which displays the first token image of any NFT collection. This simplifies the experience and reduces the number of API calls when creating a collection dashboard like the one you can see we recently released [here.](https://github.com/covalenthq/nft-dashboard-template/)
- We've made multiple additions to our `XY=K` endpoints: 
   * SushiSwap DEX support has been added, and we've also extended its token price support for Harmony One blockchain.
   * Mimo, a leading DEX on IoTeX, is now supported. This extends the price coverage for IoTeX beyond what CoinGecko currently supports.
   * We've added Claimswap just in time for an upcoming hackathon with Klaytn blockchain. We've also improved the token price coverage.
- Axie is now supported through the NFT market data endpoints, enabling users to query supported NFT data for the Ronin chain. 
- The Harmony blockchain is now fully indexed! Users can query all on-chain data through our Class A endpoints. **Harmony Mainnet chainID: 1666600000. Harmony Testnet chainID: 1666700000.**


### UPDATED

- We've made significant updates to our NFT endpoints `Get NFT market global view` and `Get historical data for NFT collection`. Find the current list of supported chains and marketplaces below. Note that some markets are still catching up. 

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
<td>Cryptopunks, Decentraland, Foundation, LooksRare, NFTrade, OpenSea, OpenSeav2, PlayDapp, Rarible, Refinable, Superrare, Zora</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Polygon</td>
<td>Aavegotchi, Decentraland, NFTKEY, NFTrade, OpenSea, PlayDapp, Refinable</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Binance</td>
<td>NFTrade, NFTKEY, Refinable</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Avalanche</td>
<td>TofuNFT, NFTrade, NFTKEY</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Fantom</td>
<td>Artion, TofuNFT, NFTKEY</td>
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
<td>Moonbeam Mainnet</td>
<td>TofuNFT</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Moonriver</td>
<td>TofuNFT, NFTrade, Moonbeans</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Harmony</td>
<td>Davinci, Metatrone, NFTKEY</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Klaytn</td>
<td>OpenSea</td>
</tr>
<tr class="text-xl border border-covalent-purple-dark">
<td>Axie</td>
<td>Axie</td>
</tr>
</tbody>
</table>

### BUG FIXES

- The issue of negative WETH balances in the `Get historical portfolio value over time` endpoint has been corrected. Users can be confident that this endpoint will continue to be improved. 

