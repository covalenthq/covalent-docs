---
title: June
order: 6
hidden: false
---

## 2021-06-30
### ADDED
- RSK Mainnet and Testnet are now fully indexed. RSK is the first general purpose smart contract platform secured by the Bitcoin Network. Mainnet `chainID: 30`, Testnet `chainID: 31`. `<multichain>`

- Arbitrum Mainnet and Testnet are now fully indexed. Arbitrum is an L2 scaling solution for Ethereum. It is a suite of Ethereum scaling solutions that enables high-throughput, low cost smart contracts while remaining trustlessly secure. Mainnet `chainID: 42161`, Testnet `chainID: 421611`. `<multichain>`

- UniSwap Clone Endpoints `/XY=K`: 
Class B endpoints provide exchange, liquidity, swap and other granular and historical data for large DEXs such as PancakeSwap and SushiSwap, which are clones of the core Uniswap code base. Thus, we revised our approach to build out a set of universal endpoints which can be applied to any supported Uniswap clone to fetch swap, volume, liquidity, pool, token and other key metrics. All the user has to do is simply replace the dexname in the API calls with the name of a supported Uniswap clone.
Current supported Uniswap clone dexnames include:
`SushiSwap`, `QuickSwap`, `Pangolin`, `SpiritSwap` and `SpookySwap`. `<data-accessibility>`

- PancakeSwap V2 now provides liquidity data for all exchanges active in the last 7 days, an update from 1 day only. PancakeSwap V2 exchange-refresh fetches both 24-hour and 7-day liquidities. This update stores the set of exchanges active within the last 7 days. Fields of ExchangeVolumeQueryV2 that don't have a _7d suffix are interpreted as if they had an implicit _24h suffix; exchanges which were not active within the last 24 hours will have zero in those fields. `<data-accessibility>`

- Added Sovryn ABIs for decoding. `<data-accessibility>`

- Added BNB, Fantom, Avalanche and Matic as pricing platforms with native chain gas tokens added as fiat `quote_currency`. `<data-accessibility>`

- Added the feature to repopulate `NFT Metadata` cache item if original_owner is null. In nftFetchImmutableMetadata, if we find a cache entry from redis but it's not the newest version, then we pass the data from redis into an updater/migrator function; get the returned value of the function and write it back to redis; and then return it for the in-memory cache to use the record. The migration function will fetch and populate the original_owner field if it's null/missing on the input

- Added more fields to the `Get all chains` endpoint: `db_schema_name`, `label` and `logo_url`. `<data-accessibility>`

- Added address search to Assets and UniSwap Clone endpoints. Just like we have tickers to search exchange assets, we have added addresses to search by comma delimited. Multiple contract addresses can now be added to the search field and queried across the Assets endpoints and UniSwap. `<data-accessibility>`


### FIXED 
- Fix - NFT Metadata endpoint response contains Broken Encoding and Status Code Request. [Issue-780](https://github.com/covalenthq/scout/issues/780)

- Fix - Get NFT transactions missing transactions on BSC testnet. Transaction Service returns Https error 500 on Get a transaction. [Issue-765](https://github.com/covalenthq/scout/issues/765)

- Fix - NFTMetadata - Http error 500 returned for some nft tokens. [Issue-764](https://github.com/covalenthq/scout/issues/764)

- Fix - PancakeSwap V2 Http error 500 Timeout on Balances. [Issue-763](https://github.com/covalenthq/scout/issues/763)

- Fix - Transaction Service `transactions_v2` Block height returns Zero. [Issue-756](https://github.com/covalenthq/scout/issues/756)

- Fix -TransactionService `transactions_v2` Metadata not being fetched for Fantom chain. [Issue-754](https://github.com/covalenthq/scout/issues/754)

- Fix - cqtscan missing icons. [Issue-741](https://github.com/covalenthq/scout/issues/741)

- Fix - Multi-chain for Topic calculator dropdown fix. [Issue- 734](https://github.com/covalenthq/scout/issues/734)

- Fix - Spot Prices return `quote_rate` null for WETH. [Issue-727](https://github.com/covalenthq/scout/issues/727)

- Fix - 500 on nft metadata. [Issue-708](https://github.com/covalenthq/scout/issues/708)

- Fix - TokenBalanceService - Support Rariable again. [Issue-693](https://github.com/covalenthq/scout/issues/693)

- Fix - Various Null Pointer exceptions and JSON syntax exception. [Issue-667](https://github.com/covalenthq/scout/issues/667)

&nbsp;
