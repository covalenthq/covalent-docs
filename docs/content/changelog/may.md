---
title: May
order: 5
hidden: false
---

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
