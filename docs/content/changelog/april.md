---
title: April
order: 4
hidden: false
---

## 2021-04-30
### Added

- Pricing Endpoint - Get historical prices by addresses v2 `<data-accessibility>`

- Class B Endpoint - GET PancakeSwap V2 network assets -  Return a paginated list of Pancake V2 pools sorted by exchange volume. Only pools with swaps in the last 24 hours are included. `<data-accessibility>`
- Class B Endpoint - GET PancakeSwap V2 address exchange balances - Gets PancakeSwap V2 address exchange balances. `<data-accessibility>`
- Class B Endpoint - GET PancakeSwap V2 address exchange liquidity transactions - Gets PancakeSwap V2 address exchange liquidity transactions  `<data-accessibility>`


- Class B Endpoint - GET PancakeSwap network assets -  Return a paginated list of Pancake pools sorted by exchange volume. Only pools with swaps in the last 24 hours are included. `<data-accessibility>`
- Class B Endpoint - GET PancakeSwap address exchange balances - Gets PancakeSwap address exchange balances. `<data-accessibility>`
- Class B Endpoint - GET PancakeSwap address exchange liquidity transactions - Gets PancakeSwap address exchange liquidity transactions. `<data-accessibility>` 

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
