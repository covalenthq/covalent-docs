---
title: Changelog
order: 9
---

# API Changelog

Every change to our API matters and reflects our belief in one of the following guiding principles which we include as tags on each changelog item:

- `<multichain>` - one unified API for all chains
- `<data-accessibility>` - access to any blockchain data at any time with greater detail.
- `<no-code>` - support for non-devs

&nbsp;

## 2021-05-31
### Added
- Kovan Testnest now fully indexed. Kovan is a Proof of Authority (PoA) publicly accessible blockchain for Ethereum. ChainID 42 `<multichain>`

- Primer - Added primer query parameters to API docs for All Class A endpoints. `<data-accessibility>`

- Added `quote-currency` and `format` parameter to All Class A endpoints in OpenAPI. `<data-accessibility>`

- Added "Chain metadata endpoint". `https://www.covalenthq.com/docs/api/#get-/v1/chains/` This endpoint returns All indexed Chains metadata information such as ChainID. `<data-accessibility>`

- Added "Get all chain statuses". `https://www.covalenthq.com/docs/api/#get-/v1/chains/status/` This endpoint returns indexed Chains metadata information which include the latest "synced_block_height" and time of the latest Block sync "synced_blocked_signed_at”. `<data-accessibility>`

- Added higher level `block-height` param for all transaction events. `<data-accessibility>`

- Added Contract MetaData info to be returned on queries to Transaction Endpoint. `<data-accessibility>`

- PancakeSwap - Added BNB as a fiat/quote_currency. 
Added new PancakeSwap endpoint for filtering by a token.
Added 7-day volume fields in assets endpoint.
Added new endpoint to calculate list of PancakeSwap exchange tokens.
Added annualized fee field. `<data-accessibility>`

- Added `query param` for secondary `topics` filtering. `<data-accessibility>`

### Fixed

- Fix TokenBalanceService - Missing WETH on response. [Issue-576](https://github.com/covalenthq/scout/issues/576)

- Fix - Avoid crawling the entire etherscan when requesting non-Ethereum ABI [Issue-620](https://github.com/covalenthq/scout/issues/620)

- Fix `TokenBalanceService` Historical Portfolio returning negative balances [Issue-612](https://github.com/covalenthq/scout/issues/612)

- Fix - Illegal Argument Exception on ENS [Issue-662](https://github.com/covalenthq/scout/issues/662)

- Fix NFT whitespace in URLs [Issue-682](https://github.com/covalenthq/scout/issues/682)


&nbsp;

## 2021-04-30
### Added

- Pricing Endpoint - Get historical prices by addresses v2 `<data-accessibility>`

- Class B Endpoint - GET Pancakeswap V2 network assets -  Return a paginated list of Pancake V2 pools sorted by exchange volume. Only pools with swaps in the last 24 hours are included. `<data-accessibility>`
- Class B Endpoint - GET Pancakeswap V2 address exchange balances - Gets Pancakeswap V2 address exchange balances. `<data-accessibility>`
- Class B Endpoint - GET Pancakeswap V2 address exchange liquidity transactions - Gets Pancakeswap V2 address exchange liquidity transactions  `<data-accessibility>`


- Class B Endpoint - GET Pancakeswap network assets -  Return a paginated list of Pancake pools sorted by exchange volume. Only pools with swaps in the last 24 hours are included. `<data-accessibility>`
- Class B Endpoint - GET Pancakeswap address exchange balances - Gets Pancakeswap address exchange balances. `<data-accessibility>`
- Class B Endpoint - GET Pancakeswap address exchange liquidity transactions - Gets Pancakeswap address exchange liquidity transactions. `<data-accessibility>` 

- Class A Endpoint -  GET Block Height `block_v2` `<data-accessibility>`

- Added Support for Zora NFTs `<data-accessibility>`

### Fixed

- Fix `TokenBalanceService` - Use PricingServiceV2 quote rates [Issue-594](https://github.com/covalenthq/scout/issues/594)

- PricingService - Historical Prices - ensure that yesterday is populated when we transition into today using UTC [Issue-557](https://github.com/covalenthq/scout/issues/557)

- Fix `TokenBalanceService` and `TokenTransferService` in Avalanche portfolio returns http 500 error message. [Issue-530](https://github.com/covalenthq/scout/issues/530)

- Fix parameterize pancake swap by setting Switch chain_id for the router [Issue-527](https://github.com/covalenthq/scout/issues/527)

- Fix Uniswap v2 streamify swaps returns http 500 error message. [Issue-524](https://github.com/covalenthq/scout/issues/524)

- Pricing service fix to add price changes in WETH. [Issue-511](https://github.com/covalenthq/scout/issues/511)

- Auto Calculate starting block fix: Allow the user to put in `latest` with no starting_block. So it is auto-calculated as `latest-1000000`. That way the user doesn't have to always look up the starting block. [Issue-431](https://github.com/covalenthq/scout/issues/431)

- Pricing service refactoring - Code refactoring to move components into separate particular functions. "Getting historical prices by address" changed to a cleaner flow using switch statements. Can now be done in 2 blocks. [Issue-339](https://github.com/covalenthq/scout/issues/339)

- Fix Primer Exceptions should be typed: Primer exceptions are now less generic. Most of them are JSONParseExceptions but we also created a few more specific ones for other cases. [Issue-332](https://github.com/covalenthq/scout/issues/332)

- Primer enabled on all class A endpoints. Added two query parameters: `match` - to filter responses. `primer` - to filter, aggregate, sort, limit responses. [Issue-323](https://github.com/covalenthq/scout/issues/323)

&nbsp;

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

## 2021-02-28
### Added

- Binance Smart Chain (BSC) has been indexed and is now ready for beta testing. BSC is one of the most promising up-and-coming blockchains and we are thrilled to be supporting it. `<multichain>`

- New endpoint: [Show all NFT token IDs by contract address](https://www.covalenthq.com/docs/api/#get-/v1/{chainId}/tokens/{address}/nft_token_ids/) `<data-accessibility>`

- Token balances endpoint now displays the token classification (ie. ERC20, ERC721, ERC1155, etc.). `<no-code>` `<data-accessibility>`

- [Topic Hash Calculator](https://www.covalenthq.com/docs/tools/topic-calculator) - can find the topic hashes that are available in any smart contract address. `<no-code>` `<data-accessibility>`

- Uniswap Network V2 Assets endpoint now has an `updated_at` field to display when the last time the data was refreshed. `<data-accessibility>`

### Fixed

- Trim for all query params so that trailing spaces do not break the queries made in the docs/api. [Issue-404](https://github.com/covalenthq/scout/issues/404)

- Native BNB pricing for transaction prices / gas. [Issue-394](https://github.com/covalenthq/scout/issues/394)

- Fix AXIE and CryptoKitties NFT fetch data since they are not fully compliant with the ERC 721 standard. [Issue-362](https://github.com/covalenthq/scout/issues/362)

- Fix dust categorization issue related to ETH prices. [Issue-329](https://github.com/covalenthq/scout/issues/329)

&nbsp;

## 2021-01-26
### Added

- SushiSwap balances and log events are now available to serve up data for one of the largest DeFi exchanges.
  `<data-accessibility>`

- Aave V2 balances and network assets are now available to add to our existing support for one of the most promising projects in DeFi.
  `<data-accessibility>`

- All Class A endpoints now support CSV format. Simply append `&format=csv` to the URL to get your API response as CSV.
  `<no-code>`

- Matic MainNet and Matic Mumbai TestNet are now live. For more info, check out our docs on the Matic network: [Matic Network](https://www.covalenthq.com/docs/networks/matic).
  `<multichain>`

- New NFT metadata endpoint providing ERC721 and ERC1155 metadata is now available. For more information on how to access NFT data, check out the [Working with NFTs](https://www.covalenthq.com/docs/learn/tracking-nft-data) case study.
  `<data-accessibility>`

&nbsp;

### Changed

### Deprecated

### Removed

### Fixed

### Securityde