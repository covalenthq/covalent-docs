---
title: February
order: 2
hidden: false
---

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