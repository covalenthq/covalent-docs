---
title: October
order: 10
hidden: false
---

## 2021-10-31

### ADDED
- Axie/Ronin Mainnet is now fully indexed! You can read more in the networks info page on our [docs](../networks/ronin). Ronin is an Ethereum-linked sidechain made specifically for Axie Infinity. Axie was built as a fun and educational way to introduce the world to blockchain technology. `Mainnet ChainID: 2020`. `<multichain>`

- To increase support for more developers and regions across the globe, we have added a list of new fiat currencies: **NGN - Nigerian Naira, ARS - Argentina Pesos, AUD - Australian Dollars and CHF - Swiss Francs**. `<no-code>`

- We have added Moonriver data and return responses which include the `gas-currency` support for Moonriver which has `MOVR` as it’s fiat currency. Read more about [Moonriver](../networks/moonriver) on Covalent. `<multichain>`

- When NFTs are newly minted, they can be transferred from the originating address to another address in batches. [Here](https://etherscan.io/tx/0xe0ed83f1cdeddfcf83000e6e748390000636655e1fe2ce15489c9e81032a3d42#eventlog) is an example of  batch transfer of NFTs on etherscan. We have built out the feature to track NFTs that undergo batch transfers. The response is parsed using `TransferBatch` to have the NFT in the [`Balances_v2`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/balances_v2/) endpoint. [Example](https://api.covalenthq.com/v1/1/address/0x63677bc4a00d551fb3cba444b75a91da19297f2b/balances_v2/?nft=true) `<data-accessibility>`

- When a transfer event occurs, it is very helpful to the developer to return existing `sender` and `log events` signatures for every transaction. We have implemented a new feature: `METHOD`repsonse. The method response provides additional details on which transfer events were invoked. Defaults to `true` for `transfer` event. You can use the `Get ERC20 token transfers` to see the response. `<data-accessibility>`

### UPDATED

- Updated SpookySwap whitelist for [`XY=K`](../learn/guides/configure/uniswap-clone) endpoint.

- To reduce the number of addresses that are blacklisted we have disabled automatic contract blacklisting and timeout-event on addresses with a large response object. To get data from such addresses, developers have to paginate the query.


### BUG FIXES

- Fix `Mint` event not decoded. [Issue-1078](https://github.com/covalenthq/scout/issues/1078)

- Fix automatic blacklisting upon timeout across all chains and endpoints. [Issue-1100](https://github.com/covalenthq/scout/issues/1100)

- Fixed Endblock invalid input to ensure that only numerals and not string can be parsed in a request.[Issue-1100](https://github.com/covalenthq/scout/issues/1100)

- Fix TransferService: Remove duplicate transactions bug on Palm Network. [Issue-1121](https://github.com/covalenthq/scout/issues/1121)

- Fix NFT Metadata issue where Cloudflare blocks scout from grabbing metadata via captcha. Cloudflare blocks our build with a captcha, we therefore have implemented the use of the recommended `ipfs.io` for as `NFT Metadata` gateway. [Issue-1107](https://github.com/covalenthq/scout/issues/1107)

- Fix offset in decoding array in ABI. [Issue-1016](https://github.com/covalenthq/scout/issues/1016)

- Fix contract not found in token holders bug for ERC1155 contracts. [Issue-1125](https://github.com/covalenthq/scout/issues/1125)


