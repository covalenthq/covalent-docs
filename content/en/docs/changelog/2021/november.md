---
title: November 2021
order: 11
hidden: false
description: Block Height Improved.
---

## 2021-11-30

As we are close to the end of the year, we are working with a single-minded focus on improving the service of the API and upgrading the performance of existing endpoints. In November, we improved on the overall response time of the **Class A** endpoints by reducing the response time to milli-seconds. We also improved the `Block-Height` response, making it easy for the API to return data at particular `Blocks`.
### ADDED
- Users in Great Britain will be excited that we have added support for GBP. `<no-code>`

- `starting-block` and `ending-block` has been added to the `Transfer_v2` endpoint. This enables developers to retreive transactions data from a particular **Block** range without having to query the entire chain. `<data-accessibility>`

- As part of the overall efforts to index Ronin Chain - which has successfully passed the community votes - we have added Katana to the Covalent list of supported DEXes. Katana is the Ronin decentralized exchange. Katana allows anyone to easily swap between the various assets within the Axie Infinity ecosystem. With the official launch of Ronin Chain on Covalent, users will be able to access `transactions`, `log events`, and activities on the Katana DEX. `<data-accessibility>`


### UPDATED
- Pushed fixes to the `Block-Height` parameters, fixing the `starting-block` > `ending-block` params during requests to endpoints that require the arguments. Further optimizing the experience for developers who are making calls to get events that occur within a given block range. `<data-accessibility>`

- Updated support for  AAVE on Avalanche C-Chain. The Avalanche is accessible at `ChainID: 43114` `<no-code>`

- Updated the token pricing for Arbitrum. `<no-code>`

- WMATIC has be added to the stablecoin tokens for Matic Mainnet. Matic is available at `ChainID: 137` on the Mainnet `<no-code>`

- We created a new service to index ERC20 Prices on Axie. `<data-accessibility>`


### BUG FIXES

- Fix NFT endpoint not working with Axie. [Issue-1179](https://github.com/covalenthq/scout/issues/1179)

- Fix missing WETH from `Balances_v2` response [Issue-1286](https://github.com/covalenthq/scout/issues/1286)

- Fix wrong volume response in `XY=K` SpookySwap #987 [Issue-987](https://github.com/covalenthq/scout/issues/987)

- Parameter starting block is required for `GET Log Events By Topic Hash`. [Issue-1166](https://github.com/covalenthq/scout/issues/1166)
