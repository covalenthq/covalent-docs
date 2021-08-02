---
title: March
order: 3
hidden: false
---

## 2021-03-30
### Added

- Integrated [Fantom](https://fantom.foundation/) chain! Fantom is a high-performance, scalable, customizable, and secure smart-contract platform. Fantom is permissionless, decentralized, and open-source while achieving fast finality (1-2 second transaction confirmation) and low fees ($0.00001). Furthermore, Fantom is EVM-compatible. `ChainID: 250`. `<multichain>`

- SushiSwapService Feature - Add swaps to Get Sushiswap address exchange liquidity transactions. `<data-accessibility>`

- Added NFT support for OPENSEA store front, Rariable, Zora, Hashmasks, Cryptopunks. With new endpoints. `<data-accessibility>`

  - Get external NFT metadata `/v1/{chain_id}/tokens/{address}/nft_metadata/{token_id}/`
  - Get NFT Token IDs `/v1/{chain_id}/tokens/{address}/nft_token_ids/`
  - Get NFT Transactions `/v1/{chain_id}/tokens/{address}/nft_transactions/{token_id}/`

- New Endpoint `/v1/{chain_id}/address/{address}/portfolio_v2/` to Calculate historical portfolio value over time. With this new feature, organizations can get the USD value of all the ERC20 tokens in their wallet over the last 30 days with a 24 hour granularity. `<data-accessibility>`

- [Avalanche C-Chain](https://www.avalabs.org/) has been indexed and is now ready for production use case. We are thrilled to be supporting [Avalanche](https://www.covalenthq.com/docs/networks/avalanche). Avalanche is the first smart contracts platform that confirms transactions instantly, supports the entirety of the Ethereum development toolkit, and enables millions of independent validators to participate as full block producers. `<multichain>`

### Fixed

- Fix NFTService - Returned transactions data is empty. [Issue-512](https://github.com/covalenthq/scout/issues/512)

- Update NFT token_ids endpoint to support Binance Smart Chain. [Issue-500](https://github.com/covalenthq/scout/issues/500)

- Fix NFT Transactions endpoint returns duplicate-transactions. [Issue-481](https://github.com/covalenthq/scout/issues/481)

- Fix AVAX - balances returns zero. [Issue-470](https://github.com/covalenthq/scout/issues/470)

- Fix NFT balances empty when no-nft-fetch=true. Fixed by sql change. [Issue-467](https://github.com/covalenthq/scout/issues/467)

- Fix NFTService - Covalent NFT support for `0x495f947276749ce646f68ac8c248420045cb7b5e`. [Issue-465](https://github.com/covalenthq/scout/issues/465)

- Fix NftService - Get all contract metadata on ChainId 56 timesout. [Issue-454](https://github.com/covalenthq/scout/issues/454)

- Fix NftService get external metadata. [Issue-452](https://github.com/covalenthq/scout/issues/452)

- Fix SushiSwap get address exchange balances was missing pools bug. Replaced `getLiquidityEvents` with `getDecodedSushiswapActionEvents` to filter Mint events. [Issue-448](https://github.com/covalenthq/scout/issues/448)

- Fix TokenBalanceService - not returning erc1155 tokens on Polygon[Matic] test net. [Issue-432](https://github.com/covalenthq/scout/issues/432)

&nbsp;


