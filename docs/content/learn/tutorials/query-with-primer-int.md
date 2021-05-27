---
title: Querying with Primer (Int)
updated: 2021-04-09
type: "📝 Article"
order: 2
hidden: false
author: gane5h
description: Learn how to use Primer's comparison operators and combine query criteria to make compound queries
tags: 
  - Primer
  - MongoDB
  - Intermediate
---

# Querying with Primer (Intermediate)

In the previous cookbook recipe, you were able to use Primer to query the blockchain for exact matches and with the dot notation. In this guide, we  will use Primer's comparison operators and combine query criteria to make compound queries.


## Comparison operators

The operators include: >, <, >=, <=, ===, and !==

<TableWrap>

|Operator|Primer|Description|
|---|---|---|
|>|`$gt`|Greater than|
|<|`$lt`|Less than|
|>=|`$ge`|Greater than or equal|
|<=|`$le`|Less than or equal|
|===|`$eq`|Equal to|
|!==|`$ne`|Not equal to|

</TableWrap>

Let's use a real-world example from the transaction endpoint. We have set `no-logs` to `true` to omit logs for simplicity. 

```json
// https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?no-logs=true&page-number=0&page-size=5&key=...
{
  "data": {
    "address": "0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae",
    "updated_at": "2021-03-15T04:52:25.163178447Z",
    "next_update_at": "2021-03-15T04:57:25.163179170Z",
    "quote_currency": "USD",
    "chain_id": 1,
    "items": [
      {
        "block_signed_at": "2021-02-20T17:47:24Z",
        "tx_hash": "0xf6d6298acb1df20ce05d272c270614cc7ff9d4a4dc699e9ac7110dbb36db0130",
        "tx_offset": 121,
        "successful": true,
        "from_address": "0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae",
        "from_address_label": null,
        "to_address": "0x090d4613473dee047c3f2706764f49e0821d256e",
        "to_address_label": "Uniswap: Token Distributor",
        "value": "0",
        "value_quote": 0.0,
        "gas_offered": 90071,
        "gas_spent": 81883,
        "gas_price": 182000000000,
        "gas_quote": 28.776617,
        "gas_quote_rate": 1930.9658
      },
      {
        "block_signed_at": "2021-01-02T07:32:21Z",
        "tx_hash": "0x5541d233d378cb47916dbbe89720fe8f38acad1345aa8d320b1bcda1cfe88c4e",
        "tx_offset": 153,
        "successful": true,
        "from_address": "0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae",
        "from_address_label": null,
        "to_address": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
        "to_address_label": null,
        "value": "33583608856374710",
        "value_quote": 26.144056,
        "gas_offered": 227697,
        "gas_spent": 193660,
        "gas_price": 40700000000,
        "gas_quote": 6.1359234,
        "gas_quote_rate": 778.4767
      },
      {
        "block_signed_at": "2021-01-02T05:48:25Z",
        "tx_hash": "0xfa442f76d8e5dd13ac49e4dd3c5272286c5cce9e094b5e0a93d2d2548d41537e",
        "tx_offset": 157,
        "successful": true,
        "from_address": "0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae",
        "from_address_label": null,
        "to_address": "0x06da0fd433c1a5d7a4faa01111c044910a184553",
        "to_address_label": null,
        "value": "0",
        "value_quote": 0.0,
        "gas_offered": 66531,
        "gas_spent": 44354,
        "gas_price": 39000000000,
        "gas_quote": 1.3466136,
        "gas_quote_rate": 778.4767
      },
      {
        "block_signed_at": "2021-01-02T05:48:25Z",
        "tx_hash": "0xe8e564a57b2a60eb7fefe1626c5ae1617b510c3e7bf4932a76b9e9fb4e360573",
        "tx_offset": 156,
        "successful": false,
        "from_address": "0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae",
        "from_address_label": null,
        "to_address": "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
        "to_address_label": null,
        "value": "40000000000000000",
        "value_quote": 31.139067,
        "gas_offered": 241100,
        "gas_spent": 23166,
        "gas_price": 35000000000,
        "gas_quote": 0.6311967,
        "gas_quote_rate": 778.4767
      },
      {
        "block_signed_at": "2021-01-02T05:18:34Z",
        "tx_hash": "0x524d4131b0ceb2710b9d937daa0e43481b8c1950045caede2f4bb9e8863193b9",
        "tx_offset": 134,
        "successful": true,
        "from_address": "0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae",
        "from_address_label": null,
        "to_address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
        "to_address_label": null,
        "value": "0",
        "value_quote": 0.0,
        "gas_offered": 48847,
        "gas_spent": 44407,
        "gas_price": 36300000000,
        "gas_quote": 1.2548842,
        "gas_quote_rate": 778.4767
      }
    ],
    "pagination": {
      "has_more": true,
      "page_number": 0,
      "page_size": 5,
      "total_count": null
    }
  },
  "error": false,
  "error_message": null,
  "error_code": null
}

```


<!-- We can compare dates  -->


### Select records using the less-than operator.

The following example retrieves all records from the transaction endpoint where the `gas_spent` field is less than `50000`:

```json
---
header: The less-than operator
---
{
    "gas_spent": {
      "$lt": 50000
    }      
}
```

## Logical operators




### Select records using logical operators

The following example retrieves all records from the transaction endpoint where the `gas_spent` field is between `50000` and `100000`:


```json
---
header: The $and logical operator operator
---
{
    "gas_spent": {
      "$and": [
        {
          "gas_spent": {
            "$gt": 50000
          }
        },
        {
          "gas_spent": {
            "$le": 100000
          }
        }
      ]
    }      
}
```

## Datetime values

### Select records using comparison operators on datetimes

The comparison operators also work with date time values. Here's an example of selecting records that belong to a block after a certain date:

```json
---
header: Comparisons operators on datetimes
---
{
    "block_signed_at": {
      "$gt": "2021-01-02"
    }      
}
```

## Access array elements

### Dot operator to access to elements on an array in the result

You can use the dot notation to access an array by index. For example, you can access the second parameter of a decoded event:

```json
---
header: Access the second element of the params array and only return result if value is 120000
---
{
    "decoded.params.1.value": 120000      
}
```