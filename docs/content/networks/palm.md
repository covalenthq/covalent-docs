---
title: Palm indexing & querying data API
order: 9
hidden: false
featuredImage: ./images/Palm.png
description: Support for the Palm NFTs network
---

![Palm banner](./images/Palm.png)

# Palm

## Introduction

[Palm](https://palm.io/) is a new NFT ecosystem for Culture and Creativity, built efficiently with Ethereum.

Palm NFT Studio collaborates with creatives, artists, marketplaces, and rights holders to bring projects and platforms into the Palm ecosystem.

Together, with some of the biggest names in fine art, cryptoart, and entertainment, Palm is building a new creative studio and NFT ecosystem on Ethereum that is both scalable and sustainable.

Creators using the Palm ecosystem will benefit from super low gas fees, and the Palm ecosystem will reward both creators and participants. The Palm ecosystem was designed from the ground up to be as flexible as artists are creative. 


### Quick facts

<TableWrap>

| Property              | Value                |
| --------------------- | -------------------- |
| Palm Mainnet chainId  | `11297108109`        |
| Palm Testnet chainId  | `11297108099`        |
| Token Explorer        |https://ethplorer.io/address/0x0516cbb0bdea3a8c782d3ec6388283e2860fdc8b|


</TableWrap>


## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the Palm network. You can query the network via the unified API by changing the `chainId`.

</Aside>

<Definitions>

- `api.covalenthq.com/v1/{chainId}/address/{address}/balances_v2/`

  - Get token balances for `address`. Return a list of all ERC20 and NFT token balances including ERC721 and ERC1155 along with their current spot prices.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transactions_v2/`

  - Retrieve all transactions for `address` including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the address.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transfers_v2/`

  - Get ERC20 token transfers for `address` along with historical token prices.

- `api.covalenthq.com/v1/{chainId}/tokens/{contract_address}/token_holders/`

  - Return a paginated list of token holders `contract_address` as of any historical block height.

- `api.covalenthq.com/v1/{chainId}/events/address/{contract_address}/`

  - Return a paginated list of decoded log events emitted by a particular smart contract.

- `api.covalenthq.com/v1/{chainId}/events/topics/{topic}/`
  - Return a paginated list of decoded log events with one or more topic hashes separated by a comma.

</Definitions>

<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

---

## Appendix

### Palm token

The Palm ecosystem will ultimately be driven by a native token, `$PALM`. It is expected that the Palm network will be up to 99% more energy efficiency than typical Proof of Work-based blockchain networks and thus providing artists a more sustainable solution today while Ethereum upgrades to a Proof-of-Stake consensus model.
