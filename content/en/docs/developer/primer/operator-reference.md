---
title: Primer Operator Reference
order: 1
description: Complete reference guide for Primer Operators.
---

# 1.0 | Primer Query Parameters

|Name|Description|
|---|---|
|primer|Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports `$group` and `Aggregation` operators.|
|match|Filters the records to pass only the documents that match the specified condition(s).|
|group|Groups input elements by the specified _id expression and for each distinct grouping, outputs an element. Grouping by _date_ operators is also possible.|
|sort|Sorts all input records and returns them in ascending or descending sorted order.|
|skip|Skips over the specified number of records|
|limit|Limits the number of records.|

Notes:

1. These are listed in order of precedence. Eg: If `primer={ ... }` and `match={ ... }` are used, `primer` is executed first.

2. All top-level queries including the _primer pipeline_ are executed on the set of records returned after _pagination_. In other words, if you want these queries to include _all_ records, you must set the ```page-number=0``` and the ```page-size=...``` to an amount that includes all records.

# 2.0 | Operator Reference

## 2.1 | Comparison

|Name|Description|
|---|---|
|$eq|Matches values that are equal to a specified value.|
|$ne|Matches values that are not equal to a specified value.|
|$gt|Matches values that are greater than a specified value.|
|$gte|Matches values that are greater than or equal to a specified value.
|$lt|Matches values that are less than a specified value.|
|$lte|Matches values that are less than or equal to a specified value.|
|$in|Matches any of the values specified in an array.|
|$nin|Matches none of the values specified in an array.|

_Comparison by date objects is also available._

## 2.2 | Logical


|Name|Description|
|---|---|
|$and|Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.|
|$not|Inverts the effect of a query expression and returns documents that do not match the query expression.|
|$nor|Joins query clauses with a logical NOR returns all documents that fail to match both clauses.|
|$or|Joins query clauses with a logical OR returns all documents that match the conditions of either clause.|


## 2.3 | Element


|Name|Description|
|---|---|
|$exists|Matches documents that have the specified field.|


## 2.4 | Aggregation

|Name|Description|
|---|---|
|$sum|Sums all values with a specified value.|
|$avg|Averages all values with a specified value.|
|$max|Determines maximum of a specified value.|
|$min|Determines minimum of a specified value.|
|$subtract|Subtracts two numbers, or two dates, or date and number in milliseconds.| 
|$divide|Divides two numbers and returns the quotient.|                   
|$multiply|Multiplies numbers together and returns the result.| 
|$toInt|Converts a value to an integer.|  
|$concat|Concatenates strings together and returns the concatentated string as a result.| 
|$pow|Raises a number to an exponent and returns the result.|                  


## 2.5 | Projection

|Name|Description|
|---|---|
|$elemMatch|Projects the first element in an array that matches the specified $elemMatch condition.|
|$group|Groups input elements by the specified _id expression and for each distinct grouping, outputs an element.|

## 2.6 | Date Aggregation (Available within ```$group```)

|Name|Description|
|---|---|
|$year|Returns the year portion of a date.|
|$month|Returns the month of a year as a number between 1 and 12.|
|$dayOfMonth|Returns the day of the month as a number between 1 and 31.|
|$hourOfDay|Returns the hour of a day as a number between 0 and 23.|
|$minuteOfDay|Returns the minute of a day as a number between 0 and 1439.|

## 2.7 | Aggregation (Available within the ```primer pipeline```)

|Name|Description|
|---|---|
|$match|Filters the records to pass only the documents that match the specified condition(s) to the next pipeline stage.|
|$group|Groups input elements by the specified _id expression and for each distinct grouping, outputs an element.|
|$sort|Sorts all input records and returns them in ascending or descending sorted order.|
|$limit|Limits the number of records passed to the next stage in the pipeline.|
|$skip|Skips over the specified number of records and passes the remaining records to the next stage in the pipeline.|

## 2.8 | Accessing Array indexes and nested objects using _dot_ (.) notation

Access elements within nested objects and arrays.

eg: ```log_events.0.decoded.name``` will access the _name_ key within the _decoded_ object within the first index of _log_events_.

eg: ```log_events.3.decoded.param.3.value``` will access the value of the fourth param of the fourth decoded log event.

#3.0 | Example Queries _(for beta testers)_

We have the following top-level query parameters.

```primer, match, group, sort, skip, and limit```

Primer is currently available on these endpoints:

<div>
  {{< open-api
      endpoint="Get log events by contract address"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-contract-address/lng=en"
  >}}
    {{< open-api
      endpoint="Get log events by topic hash(es)"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-topic-hash(es)/lng=en"
  >}}
    {{< open-api
      endpoint="Get a transaction"
      link="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-ERC20-token-transfers-for-address/lng=en"
  >}}
</div>

<!-- * [Get log events by contract address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/address/{address}/)
* [Get log events by topic hash(es)](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/topics/{topic}/)
* [Get transactions](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/transactions_v2/) -->

## 3.1 | Basic _Sort_

We can sort by simply selecting the element and determine the sort order, _1_ for acsending and _-1_ for decsending order.
Note: Sorting is currently executed _after_ paginiation.

sort=
```json
{
    "block_signed_at": 1
}
```

[https://api.covalenthq.com/v1/1/address/0xA361718326c15715591c299427c62086F69923D9/transactions_v2/?sort={"block_signed_at":1}](https://api.covalenthq.com/v1/1/address/0xA361718326c15715591c299427c62086F69923D9/transactions_v2/?sort={%22block_signed_at%22:%221%22})

We can also sort by a nested value such as the amount being repayed in the "Repay" events.
We first need to select transactions that contain a "Repay" event and then sort by the repay values. We can use the match top level query parameters match and sort. Based on the precedence definition (section 1.0 note: #1), the match query will be executed first and then sort.

match=
```json
{
    "log_events.0.decoded.name": "Repay"
}
```
&
sort=
```json
{
    "log_events.0.decoded.params.3.value": -1
}
```
[https://api.covalenthq.com/v1/1/address/0xA361718326c15715591c299427c62086F69923D9/transactions_v2/?match={"log_events.0.decoded.name":"Repay"}&sort={"log_events.0.decoded.params.3.value":-1}](https://api.covalenthq.com/v1/1/address/0xA361718326c15715591c299427c62086F69923D9/transactions_v2/?match={%22log_events.0.decoded.name%22:%22Repay%22}&sort={%22log_events.0.decoded.params.3.value%22:-1})

## 3.2 | Getting "Claimed" and "Mint" event transactions using _match_

Lets get the "Claimed" and "Mint" events from the last 100 transactions of the eth/zero pair exchange on uniswap (0x40f0e70a7d565985b967bcdb0ba5801994fc2e80) using the query parameter _match_ and the ```$or``` operator.

match=
```json
{
    "$or": [
        {
            "log_events.0.decoded.name": "Claimed"
        },
        {
            "log_events.0.decoded.name": "Mint"
        }
    ]
}
```

[https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?match={"$or":[{"log_events.0.decoded.name":"Claimed"},{"log_events.0.decoded.name":"Mint"}]}](https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?match={%20%22$or%22:%20[%20{%22log_events.0.decoded.name%22:%22Claimed%22},%20{%22log_events.0.decoded.name%22:%22Mint%22}%20]%20})

## 3.3 | Counting transactions with "Transfer" events using the _primer_ pipeline

Lets count the number of transactions that contain "Transfer" event(s) from the last 1000 transactions by _hour_ using ```$match```, ```$elemmatch```, ```$group```, and ```$sum``` within the _primer_ pipeline.

Endpoint: Get transactions
Contract: 0x40f0e70a7d565985b967bcdb0ba5801994fc2e80 this is the eth/zero pair on uniswap_v2

primer=
```json
[
    {
        "$match": {
            "log_events": {
                "$elemmatch": {
                    "decoded.name": "Transfer"
                }
            }
        }
    },
    {
        "$group": {
            "_id": {
                "month": {
                    "$month": "block_signed_at"
                },
                "day": {
                    "$dayOfMonth": "block_signed_at"
                },
                "year": {
                    "$year": "block_signed_at"
                },
                "hour": {
                    "$hourOfDay": "block_signed_at"
                }
            },
            "transfer_count": {
                "$sum": 1
            }
        }
    }
]
```
[https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?page-size=10000&primer=[{"$match":{"log_events":{"$elemmatch":{"decoded.name":"Transfer"}}}},{"$group":{"_id":{"month":{"$month":"block_signed_at"},"day":{"$dayOfMonth":"block_signed_at"},"year":{"$year":"block_signed_at"},"hour":{"$hourOfDay":"block_signed_at"}},"transfer_count":{"$sum":1}}}]](https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?page-size=10000&primer=[%20{%20%22$match%22:{%22log_events%22:{%22$elemmatch%22:{%22decoded.name%22:%22Transfer%22}}}%20},%20{%22$group%22:{%22_id%22:{%22month%22:{%22$month%22:%22block_signed_at%22},%22day%22:{%22$dayOfMonth%22:%22block_signed_at%22},%22year%22:{%22$year%22:%22block_signed_at%22},%22hour%22:{%22$hourOfDay%22:%22block_signed_at%22}},%22transfer_count%22:{%22$sum%22:1}}}%20])


## 3.4 | Using a Logical Operator to filter transactions

Suppose we want all events from the Aave interest-bearing BUSD contract, which is not a "Transfer" and not an "Approval" We also wish to see only the transactions with the remaining events emitted by the 0x6f858d52ff946d3a4c91fe5a7cdc408212d17a1b account. This is possible by using the _primer_ pipeline, the ```$match``` filter, and the ```$not``` logical operator.

primer=
```json
[
    {
        "$match": {
            "$and": [
                {
                    "$not": {
                        "decoded.name": "Transfer"
                    }
                },
                {
                    "$not": {
                        "decoded.name": "Approval"
                    }
                }
            ]
        }
    },
    {
        "$match": {
            "decoded.params.0.value": "0x6f858d52ff946d3a4c91fe5a7cdc408212d17a1b"
        }
    }
]
```
[https://api.covalenthq.com/v1/1/events/address/0xA361718326c15715591c299427c62086F69923D9/?page-size=99999&starting-block=12000000&ending-block=12050000&key=abc&primer=[{"$match":{"$and":[{"$not":{"decoded.name":"Transfer"}},{"$not":{"decoded.name":"Approval"}}]}},{"$match":{"decoded.params.0.value":"0x6f858d52ff946d3a4c91fe5a7cdc408212d17a1b"}}]](https://api.covalenthq.com/v1/1/events/address/0xA361718326c15715591c299427c62086F69923D9/?page-size=99999&starting-block=12000000&ending-block=12050000&key=abc&primer=[{$match:{$and:[{$not:{decoded.name:Transfer}},{$not:{decoded.name:Approval}}]}},{$match:{decoded.params.0.value:%220x464c71f6c2f760dda6093dcb91c24c39e5d6e18c%22}}])


####match

```json
{
    "$or": [
        {
            "value_quote": {
                "$gt": 26.0
            }
        },
        {
            "tx_hash": "0xf6d6298acb1df20ce05d272c270614cc7ff9d4a4dc699e9ac7110dbb36db0130"
        }
    ]
}
```

eg: http://google.com

## 3.5 | Using group by date with aggragtion

Lets count the number of transactions per day between block 11_000_000 and 12_000_000 from the Aave interest-bearing BUSD contract.

group=
```json
{
    "_id": {
        "year": {
            "$year": "block_signed_at"
        },
        "month": {
            "$month": "block_signed_at"
        },
        "day": {
            "$dayOfMonth": "block_signed_at"
        },
        "hour": {
            "$hourOfDay": "block_signed_at"
        }
    },
    "tx_count": {
        "$sum": 1
    }
}
```

eg: [https://api.covalenthq.com/v1/1/events/address/0xA361718326c15715591c299427c62086F69923D9/?starting-block=11000000&ending-block=12000000&group={"_id":{"year":{"$year":"block_signed_at"},"month":{"$month":"block_signed_at"},"day":{"$dayOfMonth":"block_signed_at"},"hour":{"$hourOfDay":"block_signed_at"}},"tx_count":{"$sum":1}}](https://api.covalenthq.com/v1/1/events/address/0xA361718326c15715591c299427c62086F69923D9/?starting-block=11000000&ending-block=12000000&group={"_id":{"year":{"$year":"block_signed_at"},"month":{"$month":"block_signed_at"},"day":{"$dayOfMonth":"block_signed_at"},"hour":{"$hourOfDay":"block_signed_at"}},"tx_count":{"$sum":1}})


## 3.6 | Using skip

we can limit the amount of records as a top level query.

skip=5

We can skip any amount of records in any position of the pipeline.

primer=

```json
[
    {
        "$skip": 5
    }
]
```

eg: [https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?no-logs=true&page-number=0&page-size=6&key=abc&limit=2&skip=5](https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?no-logs=true&page-number=0&page-size=6&key=abc&limit=2&skip=5)

## 3.7 | Using limit

we can limit the amount of records as a top level query.

limit=5

We can limit the amount of records shown in any position of the pipeline.

primer=

```json
[
    {
        "$limit": 5
    }
]
```

[https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?no-logs=true&page-number=0&page-size=50&key=abc&limit=5](https://api.covalenthq.com/v1/1/address/0x5a6d3b6bf795a3160dc7c139dee9f60ce0f00cae/transactions_v2/?no-logs=true&page-number=0&page-size=50&key=abc&limit=5)

## 3.8 | Sum of gas by failed and succeeded transactions

If you want to see how much gas a particular contract has burned, we can simply run the following query to sum the costs.

group=
```json
{
    "_id": "successful",
    "gas_sum": {
        "$sum": "gas_quote"
    }
}
```

[https://api.covalenthq.com/v1/1/address/0x9fd3e6610C543ee6A9e199B143505b2172057623/transactions_v2/?page-size=9000&group={"_id":"successful","gas_sum":{"$sum":"gas_quote"}}](https://api.covalenthq.com/v1/1/address/0x9fd3e6610C543ee6A9e199B143505b2172057623/transactions_v2/?page-size=9000&group={%20_id:%20%22successful%22%20,%20gas_sum:%20{%20$sum:%20gas_quote%20}%20})


## 3.9 | Tracking Compound Governance Proposal #41 supporting votes by hour

Lets count and sum the supporting and non supporting votes for the Compound Governance Proposal #41.

** supporting vote counts with sum of votes

primer=
```json
[
    {
        "$match": {
            "$and": [
                {
                    "log_events.0.decoded.name": "VoteCast"
                },
                {
                    "log_events.0.decoded.params.1.value": "41"
                },
                {
                    "log_events.0.decoded.params.2.value": true
                }
            ]
        }
    },
    {
        "$group": {
            "_id": {
                "month": {
                    "$month": "block_signed_at"
                },
                "day": {
                    "$dayOfMonth": "block_signed_at"
                },
                "year": {
                    "$year": "block_signed_at"
                },
                "hour": {
                    "$hourOfDay": "block_signed_at"
                }
            },
            "vote_count": {
                "$sum": 1
            },
            "sum_of_votes": {
                "$sum": "log_events.0.decoded.params.3.value"
            }
        }
    }
]
```

[https://api.covalenthq.com/v1/1/address/0xc0da01a04c3f3e0be433606045bb7017a7323e38/transactions_v2/?page-number=0&page-size=1000&primer=[{"$match":{"$and":[{"log_events.0.decoded.name":"VoteCast"},{"log_events.0.decoded.params.1.value":"41"},{"log_events.0.decoded.params.2.value":true}]}},{"$group":{"_id":{"month":{"$month":"block_signed_at"},"day":{"$dayOfMonth":"block_signed_at"},"year":{"$year":"block_signed_at"},"hour":{"$hourOfDay":"block_signed_at"}},"vote_count":{"$sum":1},"sum_of_votes":{"$sum":"log_events.0.decoded.params.3.value"}}}]](https://api.covalenthq.com/v1/1/address/0xc0da01a04c3f3e0be433606045bb7017a7323e38/transactions_v2/?page-number=0&page-size=1000&primer=[{"$match":{"$and":[{"log_events.0.decoded.name":"VoteCast"},{"log_events.0.decoded.params.1.value":"41"},{"log_events.0.decoded.params.2.value":true}]}},{"$group":{"_id":{"month":{"$month":"block_signed_at"},"day":{"$dayOfMonth":"block_signed_at"},"year":{"$year":"block_signed_at"},"hour":{"$hourOfDay":"block_signed_at"}},"vote_count":{"$sum":1},"sum_of_votes":{"$sum":"log_events.0.decoded.params.3.value"}}}])

## Notable Aggregations Usages

## 4.0 | Example usages of mathematical operators ($multiply, $divide, $subtract)

Here are some examples on how to perform simple operations between numbers with `$multiple`, `$divide` and `$subtract`.

Both `$subtract` and `$divide` can only take in two inputs as arguments, while `$multiply` can take in many inputs into an array.

Field name inputs must hold a number type and not string type, whille `$subtract` can accept both string type and number type, but the string type must only be date inputs.

group=
```json
{
    "_id": "block_signed_at",
    "product": {
        "$multiply": [10, 100, 15]
    },
    "productWithFields": {
        "$multiply": ["block_height", "log_offset", "tx_offset"]
    },
    "quotient": {
        "$divide": ["tx_offset", 2]
    },
    "differenceBetweenDates": {
        "$subtract": ["2021-08-03T21:51:36Z", "2021-07-03T06:23:43Z"]
    },
    "differenceBetweenNumbers": {
        "$subtract": [10, 2]
    }
}
```

[https://api.covalenthq.com/v1/1/events/address/0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06/?ending-block=latest&key=ckey_key&group={"_id":"block_signed_at","product":{"$multiply":[10,100,15]},"productWithFields":{"$multiply":["block_height","log_offset","tx_offset"]},"quotient":{"$divide":["tx_offset",2]},"differenceBetweenDates":{"$subtract":["2021-08-03T21:51:36Z","2021-07-03T06:23:43Z"]},"differenceBetweenNumbers":{"$subtract":[10,2]}}](https://api.covalenthq.com/v1/1/events/address/0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06/?ending-block=latest&key=ckey_key&group={"_id":"block_signed_at","product":{"$multiply":[10,100,15]},"productWithFields":{"$multiply":["block_height","log_offset","tx_offset"]},"quotient":{"$divide":["tx_offset",2]},"differenceBetweenDates":{"$subtract":["2021-08-03T21:51:36Z","2021-07-03T06:23:43Z"]},"differenceBetweenNumbers":{"$subtract":[10,2]}})

## 4.1| Example usages of _$pow_

The `$pow` operator takes in two expressions. The first expression is the number and the second expression is the exponent. Raising 0 to the power of a negative exponent will return `Infinity`.  

Let's convert a `WEI` price to `eth`. The `89000000000000000` price is in WEI and `eth` has a contract decimal of `18`. So we need to divide the price in `WEI` by the power of `18`.

primer=
```json
[
    {
        "$match": {
            "decoded.name": "Buy"
        }
    },
    {
        "$group": {
            "_id": {
                "buyer": "decoded.params.7.value"
            },
            "ethPrice": {
                "$divide": [89000000000000000, {"$pow": [10,18]}]
            } 
        }
    }
]
```
[https://api.covalenthq.com/v1/1/events/address/0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06/?ending-block=12894073&key=ckey_66c94c405aae4cb38d94092f634&primer=[{"$match":{"decoded.name":"Buy"}},{"$group":{"_id":{"buyer":"decoded.params.7.value"},"ethPrice":{"$divide":[89000000000000000,{"$pow": [10,18]}]}}}]](https://api.covalenthq.com/v1/1/events/address/0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06/?ending-block=12894073&key=ckey_66c94c405aae4cb38d94092f634&primer=[{"$match":{"decoded.name":"Buy"}},{"$group":{"_id":{"buyer":"decoded.params.7.value"},"ethPrice":{"$divide":[89000000000000000,{"$pow":[10,18]}]}}}])


## 4.2| Example usages of string concatenation with _$concat_

The `$concat` operator takes in expressions in an array format and can only take in expressions that resolves to a string. If the the string is null or missing, `$concat` will return a `null`. 

Let's concatenate the `block_signed_at` field with the the `tx_hash` to show when the the transaction hash was timestamped. 

primer=
```json
[
    {
        "$match": {
            "decoded.name": "Buy"
        }
    },
    {
        "$group": {
            "_id": {
                "buyer": "decoded.params.7.value"
            },
            "concatString": {
                "$concat": ["block_signed_at", "-", "tx_hash"]
            } 
        }
    }
]
```

[https://api.covalenthq.com/v1/1/events/address/0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06/?ending-block=12894073&key=ckey_66c94c405aae4cb38d94092f634&primer=[{"$match":{"decoded.name":"Buy"}},{"$group":{"_id":{"buyer":"decoded.params.7.value"},"concatString":{"$concat":["block_signed_at","-","tx_hash"]}}}]](https://api.covalenthq.com/v1/1/events/address/0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06/?ending-block=12894073&key=ckey_66c94c405aae4cb38d94092f634&primer=[{"$match":{"decoded.name":"Buy"}},{"$group":{"_id":{"buyer":"decoded.params.7.value"},"concatString":{"$concat":["block_signed_at","-","tx_hash"]}}}])


## 4.3| Using $toInt

The `$toInt` operator converts any valid expression that resolves to a number or a number value to an integer. If there are any `null` or `missing values`, `$toInt` will return a null value. The `$toInt` operator also converts hex values into integers. 

Let's convert a token Id that is in hex format into an integer so we can see what the token Id value is. The token Id hex value format is located in index 2 of the `raw_log_topics` array.

primer=
```json
[
    {
        "$match": {
            "$toInt": "log_events.0.raw_log_topics.2"
        }
    }
]
```

[https://api.covalenthq.com/v1/56/address/0x2d923e1e5992bc7a56fd090f23e3e687997af60a/transactions_v2/?key=ckey_e0...&page-number=2&page-size=2&primer=[{"$match":{"$toInt":"log_events.0.raw_log_topics.2"}}]](https://api.covalenthq.com/v1/56/address/0x2d923e1e5992bc7a56fd090f23e3e687997af60a/transactions_v2/?key=ckey_e0...&page-number=2&page-size=2&primer=[{"$match":{"$toInt":"log_events.0.raw_log_topics.2"}}])



