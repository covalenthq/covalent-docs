---
title: July 2022
weight: -19
hidden: false
description: 
---
 
## 2022-07-30

### ADDED
- The **[Cronos](https://www.covalenthq.com/docs/networks/cronos/)** blockchain is now fully indexed! Users can query all on-chain data through our Class A endpoints. **Cronos Mainnet chainID: 25.**
    - We’ve also added support for MMF and VVS Finance to our `XY=K` DEX endpoints. Try them out [here!](https://www.covalenthq.com/docs/api/#/0/0/USD/9001)


### BUG FIXES
- We fixed an issue with missing liquidity pools not being captured by our `XY=K` endpoints on Trisolaris (Aurora) and SpiritSwap (Fantom).
- We also fixed a bug where ERC721 transfer events were returning null for the decoded value field in our `Get a transaction` endpoint response. 


