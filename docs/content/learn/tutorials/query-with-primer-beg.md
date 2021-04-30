---
title: Querying with Primer (Beg)
updated: 2021-03-09
type: "📝 Article"
order: 1
hidden: false
author: gane5h
description: Learn some of the basics of Primer
tags: 
  - Primer
  - MongoDB
  - Beginner
---

import Prerequisites from "../../../components/prerequisites.js";


# Querying with Primer (Beginner)


## Introduction

Covalent offers the query language **Primer** which makes it easy for users to further process and transform the records in the Covalent API responses for their custom use-cases. Although you can transform and process the records in Javascript or your spreadsheet of choice, learning to query using Primer will make your job much easier.

Primer is currently available on these endpoints:

1. [Get log events by contract address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/address/{address}/)
2. [Get log events by topic hash(es)](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/topics/{topic}/)
3. [Get transactions](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/transactions_v2/)


## Primer intro

Primer has three kinds of query functionality:

1. The basic functionality is a simple `match` feature that allows users to keep or reject certain records based on a criteria.  
2. The intermediate functionality is to combine the operators with logical operators to create sophisticated rule sets.
3. The advanced functionality allows you to build an aggregation pipeline that closely resembles a data pipeline that can not only match/filter records, but also sort, skip, limit and aggregate records.

We use the generic term "record" in reference to the underlying data models available on a supported blockchain: `blocks`, `transactions`, `balances`, `log events`, etc. In the case of `log events`, the data model is even richer and includes the multi-schema business model logic of the underlying smart contract protocol.

This beginner guide is focused on the `match` functionality. The second part introduces more advanced matching criteria and the third part introduces the data aggregation pipeline.


### Comparison with MongoDB

The Primer syntax and functionality is closely modeled after MongoDB - one of the most popular NoSQL databases available today. Although SQL has its uses, we find a JSON-style query language to be a much better fit for the multi-schema, non-relational nature of blockchain data.

<TableWrap>

|MongoDB|Primer|
|---|---|
|Database|Chain ID|
|Collection|Collection (Response)|
|Document|Record|
|Query document|Query document|
|Operator|Operator|

</TableWrap>

The query itself is a well-formed JSON document, which we call a "query document". Besides the slight differences in how we name things, there are no differences in the behavior or functionality of the query system.

## Primer URL Syntax

We have the following top-level query parameters.

|Name|Description|
|---|---|
|primer|Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports `$group` and `Aggregation` operators.|
|match|Filters the records to pass only the documents that match the specified condition(s).|
|group|Groups input elements by the specified _id expression and for each distinct grouping, outputs an element. Grouping by _date_ operators is also possible.|
|sort|Sorts all input records and returns them in ascending or descending sorted order.|
|skip|Skips over the specified number of records|
|limit|Limits the number of records.|

The following are example URL query parameters.

### Basic _Sort_

sort=
```json
{
    "block_signed_at": 1
}
```
[https://api.covalenthq.com/v1/1/address/0xA361718326c15715591c299427c62086F69923D9/transactions_v2/?sort={"block_signed_at":1}](https://api.covalenthq.com/v1/1/address/0xA361718326c15715591c299427c62086F69923D9/transactions_v2/?sort={%22block_signed_at%22:%221%22})

This will return the entire block height of the response. _sort_ will re-arrange the order of the response. In this case by the block_signed_at date.

## Primer syntax

The basic functionality of Primer is to keep/reject records that match a specific criterion:

### All records

To select all records in a response, you simple pass an empty query document. This is the default behavior.

```json
---
header: Query to include all records
---
{
}
```

### Specific records

You can apply the equality condition to retrieve a specific record. The `<field>:<value>` expression in the query document achieves this:

```json
---
header: Query for a specific record
---
{
    "field_1": "value_1"
}
```

```json
---
header: Query for records with an exact match
---
{
    "sender_address": "0xc0da01a04c3f3e0be433606045bb7017a7323e38",
}
``` 

### Embedded records

It's possible to `match` based on deeply nested embedded documents using the dot notation (`field.nested_field`). The syntax is extensible to infinite depth: `field.nested_field.second_nested_field`.

```json
---
header: Query with dot notation
---
{
    "decoded.name": "ProposalCreated"
}
```

## Querying Compound's Governance

Now we will put to use the Primer concepts we were introduced to in the previous section against Compound's Governance contracts.


<Aside>

The Compound Governance contract is at `0xc0da01a04c3f3e0be433606045bb7017a7323e38`.

</Aside>

### Prerequisites

<Prerequisites />

### About the data

The Compound governance contract emits events pertaining to a proposal's lifecycle and voting history of COMP token holders. Here are some of the events that are emitted through this contract:

* `ProposalCreated` - emitted when a new proposal is created
* `VoteCast` - emitted when a vote has been cast on a proposal
* `ProposalCanceled` - emitted when a proposal has been canceled
* `ProposalQueued` - emitted when a proposal has been queued in the Timelock
* `ProposalExecuted` - emitted when a proposal has been executed in the Timelock


<Aside>
Covalent offers a handy tool if you want to explore the events and their topic hashes emitted by a smart contract.

<br />
<br />
<Button type="primary" href="/tools/topic-calculator">Go to "Topic Hash calculator"</Button>
</Aside>

The `ProposalCreated` event for example, looks like the following:

```json
{
    "block_signed_at": "2020-04-27T02:41:52Z",
    "block_height": 9951904,
    "tx_offset": 38,
    "log_offset": 14,
    "tx_hash": "0xeee9627ef06eb757e7959093c7ba8e3e4e64b466f286df5e482ff183ed95d25c",
    "raw_log_topics": [
        "0x7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0"
    ],
    "sender_address": "0xc0da01a04c3f3e0be433606045bb7017a7323e38",
    "sender_address_label": null,
    "raw_log_data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000008169522c2c57883e8ef80c498aab7820da5398060000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000000097daa10000000000000000000000000000000000000000000000000000000000981e2100000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000003d9819210a31b4961b30ef54be2aed79b9c9cd3b0000000000000000000000003d9819210a31b4961b30ef54be2aed79b9c9cd3b00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000175f737570706f72744d61726b657428616464726573732900000000000000000000000000000000000000000000000000000000000000000000000000000000185f73657450726963654f7261636c6528616464726573732900000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000020000000000000000000000000f650c3d88d12db855b8bf7d11be6c55a4e07dcc90000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ddc46a3b076aec7ab3fc37420a8edd2959764ec400000000000000000000000000000000000000000000000000000000000003f42320416464205553445420537570706f72740a496e20612053657074656d626572203230313920766f74652c207573657273207765726520676976656e20616e206f70706f7274756e69747920746f2073656c656374207768696368206173736574732074686579206661766f72656420616464696e6720746f20436f6d706f756e643b204d616b657220616e642054657468657220285553445429206c65642074686520706f6c6c2e0a0a546869732070726f706f73616c2061646473205b5465746865725d2868747470733a2f2f65746865727363616e2e696f2f746f6b656e2f30786461633137663935386432656535323361323230363230363939343539376331336438333165633729206173206120737570706f727465642061737365742c2077697468206e6f20636f6c6c61746572616c20666163746f72206f72207265736572766520666163746f722c20616e6420757064617465732074686520436f6d706f756e64207072696365206665656420746f20636f6e7365727661746976656c79207065672054657468657220746f2024312e204279207573696e672061207065672c207765616b6e65737320696e2074686520756e6465726c79696e6720617373657420776f6ee2809974206368616e676520636f6c6c61746572616c20726571756972656d656e747320666f7220757365727320626f72726f77696e67205465746865722e0a0a54686520696e697469616c205b696e7465726573742072617465206d6f64656c5d2868747470733a2f2f65746865727363616e2e696f2f616464726573732f3078366263386665323764306337323037373333363536353935653733633064356366376166616533362920666f72205465746865722069732061206a756d702d72617465206d6f64656c2077686963682072616e6765732066726f6d203225206174203025207574696c697a6174696f6e2c20746f2032302520617420393025207574696c697a6174696f6e2c207468656e206a756d707320746f203430252061742031303025207574696c697a6174696f6e2e0a0a635553445420697320616e2075706772616461626c652063546f6b656e20636f6e7472616374207468617420686173206265656e206d6f64696669656420746f206163636f6d6d6f6461746520706f74656e7469616c207472616e73666572206665657320696e2074686520756e6465726c79696e6720746f6b656e2e205468652063546f6b656e20636f6e747261637420686173206265656e205b7265766965776564206279204f70656e5a657070656c696e20616e642074686520436f6d706f756e64207465616d5d2868747470733a2f2f636f6d706f756e642e66696e616e63652f7365637572697479292e000000000000000000000000",
    "decoded": {
        "name": "ProposalCreated",
        "signature": "ProposalCreated(uint256 id, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 startBlock, uint256 endBlock, string description)",
        "params": [
        {
            "name": "id",
            "type": "uint256",
            "indexed": false,
            "decoded": true,
            "value": "1"
        },
        {
            "name": "proposer",
            "type": "address",
            "indexed": false,
            "decoded": true,
            "value": "0x8169522c2c57883e8ef80c498aab7820da539806"
        },
        {
            "name": "targets",
            "type": "address[]",
            "indexed": false,
            "decoded": true,
            "value": [
            {
                "value": "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
                "typeAsString": "address"
            },
            {
                "value": "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
                "typeAsString": "address"
            }
            ]
        },
        {
            "name": "values",
            "type": "uint256[]",
            "indexed": false,
            "decoded": true,
            "value": [
            {
                "value": "0",
                "bitSize": 256,
                "typeAsString": "uint256"
            },
            {
                "value": "0",
                "bitSize": 256,
                "typeAsString": "uint256"
            }
            ]
        },
        {
            "name": "signatures",
            "type": "string[]",
            "indexed": false,
            "decoded": true,
            "value": [
            {
                "value": "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0017",
                "typeAsString": "string"
            },
            {
                "value": "_setPriceOracle(address)",
                "typeAsString": "string"
            }
            ]
        },
        {
            "name": "calldatas",
            "type": "bytes[]",
            "indexed": false,
            "decoded": true,
            "value": [
            {
                "value": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA==",
                "typeAsString": "bytes"
            },
            {
                "value": "AAAAAAAAAAAAAAAA3cRqOwdq7Hqz/DdCCo7dKVl2TsQ=",
                "typeAsString": "bytes"
            }
            ]
        },
        {
            "name": "startBlock",
            "type": "uint256",
            "indexed": false,
            "decoded": true,
            "value": "9951905"
        },
        {
            "name": "endBlock",
            "type": "uint256",
            "indexed": false,
            "decoded": true,
            "value": "9969185"
        },
        {
            "name": "description",
            "type": "string",
            "indexed": false,
            "decoded": true,
            "value": "# Add USDT Support\nIn a September 2019 vote, users were given an opportunity to select which assets they favored adding to Compound; Maker and Tether (USDT) led the poll.\n\nThis proposal adds [Tether](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7) as a supported asset, with no collateral factor or reserve factor, and updates the Compound price feed to conservatively peg Tether to $1. By using a peg, weakness in the underlying asset won’t change collateral requirements for users borrowing Tether.\n\nThe initial [interest rate model](https://etherscan.io/address/0x6bc8fe27d0c7207733656595e73c0d5cf7afae36) for Tether is a jump-rate model which ranges from 2% at 0% utilization, to 20% at 90% utilization, then jumps to 40% at 100% utilization.\n\ncUSDT is an upgradable cToken contract that has been modified to accommodate potential transfer fees in the underlying token. The cToken contract has been [reviewed by OpenZeppelin and the Compound team](https://compound.finance/security)."
        }
        ]
    }
}
```

### Specific record(s)

For the Compound Governance log events, we can pick a specific record with a transaction hash: 

```json
---
header: Query for a specific record
---
{
    "tx_hash": "0xeee9627ef06eb757e7959093c7ba8e3e4e64b466f286df5e482ff183ed95d25c"
}
```

If you want to filter all records with a specific `sender_address`, the following syntax works:

```json
---
header: Query for records with an exact match
---
{
    "sender_address": "0xc0da01a04c3f3e0be433606045bb7017a7323e38"
}
```

### Embedded records

If you want to match all "ProposalCreated" events that is available inside an embedded document, this syntax with the dot notation works:

```json
---
header: Query with dot notation
---
{
    "decoded.name": "ProposalCreated"
}
```

## Summary 

By succesfuly completing this learning series, you would have been able to match/filter records from Covalent using a specific criteria as expressed with Primer's query syntax. Additionally, you have also used the dot notation query syntax to match/filter records based on embedded fields.

Next in the series, we will learn how to use Primer's query operators.

