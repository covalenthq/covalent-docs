---
title: May 2022
weight: -17
hidden: false
description: Evmos and Aurora indexed! Large LP quotes fixed. 
---
 
## 2022-05-30

### ADDED
- The **[Evmos](https://www.covalenthq.com/docs/networks/evmos/)** blockchain is now fully indexed! Users can query all on-chain data through our Class A endpoints. **Evmos Mainnet chainID: 9001. Evmos Testnet chainID: 9000.**
	- We’ve also added support for Diffusion, Cronus, and EvmoSwap to our `XY=K` DEX endpoints. Try it out [here!](https://www.covalenthq.com/docs/api/#/0/0/USD/9001)

- Additionally, we have indexed the **[Aurora](https://www.covalenthq.com/docs/networks/aurora/)** blockchain! **Aurora Mainnet chainID: 1313161554. Aurora Testnet chainID: 1313161555.**
	- Along with Class A support, we have added support for WannaSwap and Trisolaris to our `XY=K` [endpoints!](https://www.covalenthq.com/docs/api/#/0/0/USD/1313161554)

### BUG FIXES
- We created an automatic filtering system that prevents the ecosystem chart data from displaying large quotes from low liquidity pools.

