---
title: Working with NFTs
updated: 2021-04-25
type: "📝 Article"
order: 3
hidden: false
author: gane5h
featuredImage: ../images/working-with-nfts.png
description: Learn how to quickly extract detailed NFT data including balances, transactions with decoded log events and detailed metadata.
tags:
  - Class A
  - Beginner
  - NFT
---

![Working with NFTs logo](../images/working-with-nfts.png)

# Working with NFTs

<Aside>

**Outcome:** Learn how to quickly extract detailed NFT data including balances, transactions with decoded log events and detailed metadata using the Covalent API.
Learn how to use Primer to achieve the above.
</Aside>

&nbsp;

## Introduction

NFTs represent ownership over digital or physical assets. The standard ERC20 contract interface is insufficient for tracking NFTs because each asset is distinct (non-fungible) whereas in the case of ERC20, all tokens are identical (fungible).

&nbsp;

## Endpoints Summary:

There are five endpoints to work with NFTs:

<Definitions>

- `v1/{chain_id}/address/{address}/balances_v2/`

  - Get token balances for `address`. Return a list of all ERC20 and NFT token balances including ERC721 and ERC1155 along with their current spot prices.

- `v1/{chain_id}/address/{address}/transactions_v2/`

  - For a given `address`, return the transactions involved with it. The transactions are returned alongwith the decoded log events. If you specify a NFT contract for the `address`, the log event will contain the `token_id`s being moved around.

- `v1/{chain_id}/tokens/{contract_address}/nft_metadata/{token_id}/`

  - Given a NFT contract at `contract_address` and a `token_id`, fetch the external metadata along with their owners.

- `/v1/{chain_id}/tokens/{address}/nft_token_ids/`

  - For a given NFT `contract_address`, return a list of ALL token IDs for the NFT contract on a blockchain network.

- `/v1/{chain_id}/tokens/{address}/nft_transactions/{token_id}/`
  - For a given NFT `contract_address` and a `token_id`, returns a list of ALL transactions given for the NFT contract.

</Definitions>

&nbsp;

## Address balance

<TableWrap>

| Parameter      | Default | Description                                                                                     |
| -------------- | ------- | ----------------------------------------------------------------------------------------------- |
| `nft`          | false   | When this is set to `true`, the response returns ERC721 and ERC1155 tokens as well              |
| `no-nft-fetch` | false   | When this is set to `true`, the response does not return the metadata associated with each NFT. |

</TableWrap>

<Aside>

**Note:** When `no-nft-fetch=true`, the tokens returned are a heuristic and you'll have to manually call the metadata endpoint to confirm that the address actually owns the NFT.

</Aside>

&nbsp;

## Address transactions

<TableWrap>

| Parameter             | Default | Description                                                                 |
| --------------------- | ------- | --------------------------------------------------------------------------- |
| `block-signed-at-asc` | false   | When set to `true`, sort the transactions in chronological ascending order. |

</TableWrap>

&nbsp;

## NFT metadata

This endpoint is helpful if you want to retrieve metadata for a particular NFT token. Take for example:

<TableWrap>

| Field              | Value                                      |
| ------------------ | ------------------------------------------ | ----------------------- |
| `contract_address` | 0xe4605d46fd0b3f8329d936a8b258d69276cba264 | MEME Ltd.               |
| `token_id`         | 123                                        | I wish I was understood |

</TableWrap>

![I wish I was understood](https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg)

```json
{
  "data": {
    "items": [
      {
        "contract_decimals": 0,
        "contract_name": "Meme Ltd.",
        "contract_ticker_symbol": "MEMES",
        "contract_address": "0xe4605d46fd0b3f8329d936a8b258d69276cba264",
        "logo_url": "https://logos.covalenthq.com/tokens/0xe4605d46fd0b3f8329d936a8b258d69276cba264.png",
        "type": "nft",
        "balance": null,
        "quote_rate": null,
        "quote": null,
        "nft_data": [
          {
            "token_id": "123",
            "token_balance": null,
            "token_url": "https://api.dontbuymeme.com/memes/123",
            "external_data": {
              "name": "I wish I was understood",
              "description": null,
              "image": "https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg",
              "external_url": "https://dontbuymeme.com/artist-series/fewocious",
              "attributes": [
                {
                  "trait_type": "Set",
                  "value": "Artist Drop 8 - Fewocious"
                },
                {
                  "trait_type": "Artist",
                  "value": "Fewocious"
                },
                {
                  "trait_type": "Type",
                  "value": "Pop Surreal"
                },
                {
                  "display_type": "date",
                  "trait_type": "birthday",
                  "value": 1609267020
                },
                {
                  "trait_type": "Max Supply",
                  "value": "100"
                }
              ]
            },
            "owner": null
          }
        ]
      }
    ],
    "pagination": null
  },
  "error": false,
  "error_message": null,
  "error_code": null
}
```
&nbsp;
# Using Primer to query NFT data.

Covalent offers the query language **Primer** which makes it easy for users to further process and transform the records in the Covalent API responses for their custom use-cases.

You can read more about [Primer](/learn/tutorials).

You can use the simplest query parameter of Primer, `match` to return NFT token balances ONLY for an address. Querying the same address as above we have:

**https://api.covalenthq.com/v1/1/address/0xe4605d46fd0b3f8329d936a8b258d69276cba264/balances_v2/?nft=true&match={$or:[{supports_erc:{$elemmatch:"erc721"}},{supports_erc:{$elemmatch:"erc1155"}}]}**

The URL demonstrates a basic outlook on how to write a Primer query. The endpoint queried is the `Get Token Balances for Address` endpoint. It takes the following parameters:
- Set `nft=true`
- A Primer `match` query which takes the `$or` condition to filter the response by checking for elements (`$elemmatch`) which match `erc721` and `erc1155` NFT tokens.

```json
match={
        "$or":[
              {
                "supports_erc":
                  {"$elemmatch":"erc721"}
              },
              {
                "supports_erc":
                  {"$elemmatch":"erc1155"}
              }
           ]
      }
```


&nbsp;

# FAQ

**1. How do I render an address with a large number of NFTs?**

Take for example [Pranksy](https://twitter.com/pranksynft?lang=en) who owns a large number of NFTs at the address `0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459`. If you were to call the `balances_v2` endpoint with `nft=true` - the API will time out because there's a lot of off-chain metadata to fetch.

Our recommendation is the following:

The general idea is to have a two-level hierarchy of balances when rendering the NFTs. This is similar to how a music player like iTunes first shows a list of albums and then you can drill down to a specific album to see the tracks.

In a similar vein, first quickly return all the NFTs and render them as top-level collections. You can get this data with `nft=true` and `no-nft-fetch=true`. At this point, you don't actually know how many tokens are within a collection, just that there might be some.

Second, when the user choses to drill down to a collection, you can render the `token_id`s that the address owns. For this you'll have to call the NFT metadata endpoint to get the current owner. Ofcourse, you'll have to discard all `token_id`s that the address does not own.
