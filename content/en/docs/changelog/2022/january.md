---
title: January 2022
weight: -13
hidden: false
description: Annotation to NFT market endpoints.
---

## 2022-1-31

### ADDED

- Added supported protocols annotation to NFT market endpoints. The newly added supported protocols annotation improves the user experience calling the CovalentOpenAPI, and which also includes an array of protocols for the two NFT market endpoints. [Get NFT market global view](https://www.covalenthq.com/docs/api/#/0/Get%20NFT%20market%20global%20view/USD/1) and [Get historical data for NFT collection](https://www.covalenthq.com/docs/api/#/0/Get%20historical%20data%20for%20NFT%20collection/USD/1) `<data-accessibility>`

![image](../images/supported_networks.png)

### UPDATED

- Updated Moonbeam Stablecoins, adding the data to it’s AMM pricing service. This newly updated list of stable coins added to the AMM pricing service, which already exist on Moonbeam ensures that the stablecoin routing functions can resolve prices for the AMM pricing service. `<data-accessibility>`

- Moonbeam, `chainID = 1284` has been updated to include two DEXes: StellaSwap and BeamSwap. Developers can query ALL Class A endpoints to retrieve the necessary data from the supported DEXes. `<data-accessibility>`

[StellaSwap](https://stellaswap.com/) is DeFi Gateway to Moonbeam. 

[BeamSwap](https://beamswap.io/) is a decentralized exchange (DEX) with an automated market maker (AMM), providing liquidity and peer-to-peer transactions, built on the Moonbeam network.

- The Class B AAave endpoint has been updated to display supply positions with Borrows. This is achieved via the AaveV2Service. Example query: `https://api.covalenthq.com/v1/1/address/0xd9976b0627ca845ed639bbb3850da958c20485f9/stacks/aave_v2/balances/` `<data-accessibility>`

- NFT market cap improvements, filled in missing contract names, added more market support and chain support. `<data-accessibility>`

- The Token balances endpoint has been updated to return Ronin/Axie chain (`ChainID = 2020`) Gas currency and Ronin/Axie coinGecko prices. `<multichain>`

- Updated Pricing service_v2. Pricing service_v1 deprecated. `<multichain>`


### BUG FIXES

- Fixed Pancakeswap null check - 500 for missing ticker symbol [Issue-1379](https://github.com/covalenthq/scout/issues/1379)
- Fixed duplicate gas wallet balance items, fixes Balances Timeout on Ronin/Axie [Issue-1345](https://github.com/covalenthq/scout/issues/1345)
