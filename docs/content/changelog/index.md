---
title: Changelog
order: 10
---

# API Changelog

Every change to our API matters and reflects our belief in one of the following guiding principles which we include as tags on each changelog item:

- `<multichain>` - one unified API for all chains
- `<data-accessibility>` - access to any blockchain data at any time with greater detail.
- `<no-code>` - support for non-devs

&nbsp;


|Month                   |Major Update|
| -----------------------| --------- |
| [January](./january)   |  [Matic](../networks/matic) Indexed. All Class A endpoints now support CSV format  |
| [February](./february) | [BSC](../networks/bsc) Indexed. [Topic Hash Calculator](../tools/topic-calculator) - can find the topic hashes that are available in any smart contract address.  New endpoint: [Show all NFT token IDs by contract address](https://www.covalenthq.com/docs/api/#get-/v1/{chainId}/tokens/{address}/nft_token_ids/)  |
| [March](./march)       | [Avalanche C-Chain](../networks/avalanche) indexed. [Fantom](../networks/fantom) Index. New Endpoint `/v1/{chain_id}/address/{address}/portfolio_v2/` to Calculate historical portfolio value over time. With this new feature, organizations can get the USD value of all the ERC20 tokens in their wallet over the last 30 days with a 24 hour granularity.  |
| [April](./april)       | New Pricing Endpoint [`Get historical prices by addresses v2`](https://www.covalenthq.com/docs/api/#get-/v1/pricing/historical_by_addresses_v2/{chain_id}/{quote_currency}/{contract_addresses}/). Class B PanckaeSwap ednpoints    |
| [May](./may)           | [Kovan]](../networks/kovan) Indexed |
| [June](./june)         | [RSK]](../networks/rsk) Indexed. [Arbitrum]](../networks/arbitrum) Indexed  |
| [July](./july)         | [Palm]](../networks/palm) Indexed. `animation _url` for NFTs    |
| [August](./august)         | Check if a Network `is_testnet`    |
| [September](./september)         | We added compatibility for RNS |
| [October](./october)         | New fiat currencies |




