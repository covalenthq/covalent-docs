---
title: June 2022
weight: -18
hidden: false
description: Astar indexed! Uniswap bug fixes. 
---
 
## 2022-06-30

### ADDED
- The **[Astar](https://www.covalenthq.com/docs/networks/astar/)** blockchain is now fully indexed! Users can query all on-chain data through our Class A endpoints. **Astar Mainnet chainID: 592. Astar Testnet chainID: 81.**
	- We’ve also added support for ArthSwap to our `XY=K` DEX endpoints. Try it out [here!](https://www.covalenthq.com/docs/api/#/0/0/USD/9001)

### UPDATED
- Users may have noticed we deprecated some of our unmaintained Class B endpoints for the following protocols; PancakeSwap, SushiSwap, Uniswap V1, Uniswap V2, Aave, Balancer, and Curve. For data on these protocols, devs can either make use of other endpoints such as log events, or wait for our upcoming product release which will enable the community to create their own endpoints known as Class C. 
- In addition, we have hidden our outdated pricing endpoints `Get historical prices by ticker symbol`, `Get spot prices`, and `Get price volatility`. 

### BUG FIXES
- Regarding Uniswap, we filtered out pools where a token's contract decimal was 0 which was inflating liquidity pool quotes. This eliminated obscene quotes from low liquidity pools. 

