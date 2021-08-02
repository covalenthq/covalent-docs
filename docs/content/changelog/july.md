---
title: July
order: 7
hidden: false
---

## 2021-07-31

### ADDED
- Palm Mainnet and Testnet are now fully indexed. It is a new NFT ecosystem for Culture and Creativity, built efficiently with Ethereum. Creators using the Palm ecosystem will benefit from super low gas fees, and the Palm ecosystem will reward both creators and participants. Covalent is making it possible to easily access data on Palm by simply changing the ChainID on our API requests. `Mainnet chainID: 11297108109, Testnet chainID: 11297108099`. `<multichain>`.

- We have added `animation _url` for NFTs. This will enable developers using the NFTs endpoint to return animated NFTs thus improving the overall developer experience and aesthetics. 
Example: `https://api.covalenthq.com/v1/1/tokens/0xbbbee5503a40d51893674f3dd234196a115ce4aa/nft_metadata/27900010001/?key="API-KEY"` `<multichain>`

### UPDATE
- `XY=K` - Added token `quote_rates` to returned responses. The XY=K endpoint provides granular and historical data for large DEXs such as QuickSwap and SushiSwap, which are clones of the core Uniswap code base. Read more in the [June](./june) Changelog. We updated the endpoint to include `quote_rates` in it’s response.  Token `quote_rate` is the current spot exchange rate in quote-currency. This enables developers to validate the default returned `quote` for a Token.

- `XY=K` - Added DEX `name` and `chain_id` fields to ecosystem charts, pools and tokens thus further increasing the Developer experience building using these set of endpoints. 

- `XY=K` - Added `ens` resolution so now we can get user transactions for example using an `ens` address such as `demo.eth` 

- Added RSK `gas` price map. We indexed RSK in the month of [June](./june). RSK is the first general purpose smart contract platform secured by the Bitcoin Network. Developers building on RSK using Covalent now have the extra feature of being able to calculate the gas cost of a transaction.

- Add NFTs Metadata `burned` field. This is a new feature where a burned NFT will not be returned when it has been burned, thus the metadata holds the information that it has been transferred to a null address, which is what is means for an NFT that has been burned 

```javascript
  @Schema(description = "When set to true, this NFT has been Burned."
        public Boolean burned;
```

Developers querying the NFT metadata endpoint are now able to know when a previously existing NFT is no longer in existence. This information is returned in the metadata responses and thus developers can easily indicate to their end users, using custom error messages the unavailability of an NFT

- Add **owner's `address`** for NFT metadata - We update the [Get external NFT metadata](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/tokens/{contract_address}/nft_metadata/{token_id}/) endpoint to return the `address` of the actual owner of an NFT. An NFT owner can be a name rather than an address when called by the owner function via web3, we added an `owner_address` field taken from the same call used to determine whether or not an nft has been burned. This is more reliable than the web3 owner function and also guarantees that it is the current owner's address.

- Updated new logos for Palm. Check out the [Logo URL](https://www.covalenthq.com/static/images/icons/display-icons/palm-mainnet-logo.svg) This query can be done using the [`Get all chain statuses`](https://www.covalenthq.com/docs/api/#get-/v1/chains/status/) endpoint.

- **Primer has now been updated to include a HEX converter!** Hexadecimal (or hex) is a base 16 system used to simplify how binary is represented. Hexadecimal allows groups of four bits to be more conveniently represented by a single "hex" digit, so for example the eight bit binary value 11011011 only requires two hexadecimal digits "DB" [Wikipedia](https://simple.wikipedia.org/wiki/Hexadecimal). Developers building using Primer can thus convert binary response to HEX without having to resort to the use of an external converter! All this while writing the Primer syntax!

Primer: Fixed and added more functionality of ["$toInt"](https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/) This feature has been implemented as closely to mongodb as we see it. This enables API users to carry out rich queries such as
Ex: for converting a token id from the raw_log_topics array 

```javascript
primer=[{“$match”:{“$toInt”:“log_events.0.raw_log_topics.3”}}]
```

- Updated Primer features: `$divide`, `$mult`, `$subtract` and `$concat`



### FIXED 

- NFTs fetch cryptokitties fix - This fix is very important particularly as cryptokitties is a non compliant NFTs. A new NFT caching feature was introduced to cover all the edge cases of querying NFTs data on CryptoKitties. [Issue-787](https://github.com/covalenthq/scout/issues/787)

- We have fixed the error message the API will throw when a user groups `key` field by parsing duplicates [Issue-825](https://github.com/covalenthq/scout/issues/825)

- Fixed Primer and removed `error_message` when `filterRow` is empty [Issue-832](https://github.com/covalenthq/scout/issues/832). Thus improving it to send a `BadRequestResponse("Unable to query on a record where 'decoded' equals 'null'.")`

- Lowercase any input `addresses` for Primer `match` queries. [Issue-833](https://github.com/covalenthq/scout/issues/833) ​Primer's match is case sensitive, so if you were to match any type of addresses, it needs to be lowercase in order for it to be a match with the API response. This fixes it by lowercasing all user inputed `addresses`, so user's do not need to manually lowercase it themselves.

- Fix to check for invalid Primer pipeline syntax. [Issue-842](https://github.com/covalenthq/scout/issues/842) Example response: 
```javascript
BadRequestResponse(String.format("Primer Aggregations should be put into its own object! Found this in object %d: " + e.getAsJsonObject().keySet(), i + 1)); 
```
This improves the API user experience and thus reduces debugging time for the user.

- `XY=K` Timeout fix [Issue-862](https://github.com/covalenthq/scout/issues/862) A fix that ensures historical and spot token prices from DEXs supported by the `XY=K` endpoints are available through the [`Get historical prices by addresses v2`](https://www.covalenthq.com/docs/api/#get-/v1/pricing/historical_by_addresses_v2/{chain_id}/{quote_currency}/{contract_addresses}/) endpoint.
