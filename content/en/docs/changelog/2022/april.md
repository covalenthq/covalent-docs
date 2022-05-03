---
title: April 2022
weight: -16
hidden: false
description: Fees paid added to transaction endpoint, more dates added to XY=K
---
 
## 2022-04-30

### ADDED
- We’ve added a fees paid field to our [transaction endpoint](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1) that allows users to see the actual amount of gas paid for any transaction. 

### UPDATED
- We’ve updated our `Get XY=K pools` endpoint by adding an additional 8th day to the date calculations in order to allow users to calculate a 7 day percentage change. See a sample response below. 

```javascript
{
        "token_1":{
        "contract_address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
        "contract_name":"Wrapped Ether"
        "volume_in_24h":"0"
        "volume_out_24h":"0"
        "quote_rate":2853.3313
        "reserve":"1"
        "logo_url":"https://logos.covalenthq.com/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
        "contract_ticker_symbol":"WETH"
        "contract_decimals":18
        "volume_in_7d":"443245840563430634"
        "volume_out_7d":"5443245840563430633"
    }
    "chain_name":"eth-mainnet"
    "chain_id":"1"
    "dex_name":"uniswap_v2"
    "volume_7d_quote":3.6917495e+24
    "annualized_fee":0
}
```

### BUG FIXES
