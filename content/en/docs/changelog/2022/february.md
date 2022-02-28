---
title: February 2022
weight: -14
hidden: false
description: Solana balances, NFT market data updates.
---

## 2022-02-28

### ADDED

- For quite some time it has been highly requested by our community to index Solana. After months of hard word dissecting this non-EVM chain, we have added [Solana support](https://www.covalenthq.com/blog/solana-balances-announcement/) to our most-used endpoint, [`Get token balances for address`](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-balances-for-address/lng=en). This enables developers to fetch token balances including NFTs for any wallet address on Solana with a single API call. Simply use the `chain_id` 1399811149 to get started!

```javascript
{
    "chain_id":"1399811149"
    "chain_name":"solana-mainnet"
}
```

- We added two new marketplaces, Cryptopunks and TofuNFT, to our [NFT market data endpoints!](https://www.covalenthq.com/docs/api/#/0/Get%20NFT%20market%20global%20view/USD/1) `<data-accessibility>`

```javascript
{
          supportedChains = {
                  "eth-mainnet"
          },
          id = "cryptopunks"
          name = "Cryptopunks"
          supportedChains = {
                  "fantom-mainnet",
                  "astar-shiden",
                  "moonbeam-moonriver",
                  "arbitrum-mainnet",
                  "avalanche-mainnet",
          },
          id = "tofunft"
          name = "TofuNFT"
}
```

- [Klaytn](https://www.covalenthq.com/docs/networks/klaytn/) prices are now supported from [Coingecko](https://www.coingecko.com/en/coins/klaytn). `<data-accessibility>`

- [Beamswap](https://beamswap.io/) logos are now supported! Beamswap is a leading defi hub on [Moonbeam](https://www.covalenthq.com/docs/networks/moonbeam/), queryable through our [`XY=K`](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools/USD/1) endpoints. `<multi-chain>`

### UPDATED

- We've updated our [`Get NFT market global view`](https://www.covalenthq.com/docs/api/#/0/Get%20NFT%20market%20global%20view/USD/1) to support two new chains -[BSC](https://www.covalenthq.com/docs/networks/bsc/) and [Moonriver](https://www.covalenthq.com/docs/networks/moonriver/). `<multi-chain>`

- We've also added more supported chains for [SushiSwap](https://www.sushi.com/) to our [`XY=K`](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20pools/USD/1) endpoints! `<multi-chain>`

### BUG FIXES

- Fixed [Compound](https://www.covalenthq.com/docs/api/#/0/Get%20Compound%20pools/USD/1) APR
- Fixed missing NFT data for OpenSea on Polygon
- Fixed null `contract_name` and `contract_ticker_symbol` for `Get token balanced for address`
