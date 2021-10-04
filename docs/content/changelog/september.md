---
title: September
order: 9
hidden: false
---

## 2021-09-30

For the start of the last quarter, we took a step back from implementing new features and focused mainly on infrastructure and decentralization. Therefore, in the month of September, our commitment was geared towards strengthening our core infrastructure and upgrading our endpoints to better serve our customers.

### ADDED
- We added compatibility for RNS. [RNS](https://developers.rsk.co/rif/rns/) provides an architecture which enables the identification of blockchain addresses by human-readable names. Covalent API users can query data on the rsk network by parsing RNS addresses.
 
- We have implemented an expiry feature for ENS and RNS addresses.

- The [Get token balances for address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/balances_v2/) `balances_v2` endpoint now includes a timestamp field! This extrafield `last_transferred_at: ` indicates the time of last transfer for a particular wallet address.

![image](./images/timestamp.png)

### UPDATE

- The Token Balance service is updated to return a range of wallet historical portfolios by day. It defaults to 30 days when queried.

- Updated RSK Logo


### BUG FIXES

- Fixed - Bsc missing logos added - [Issue-930](https://github.com/covalenthq/scout/issues/930)

- Fixed empty matic response for contract metadata - [Issue-932](https://github.com/covalenthq/scout/issues/932) 

- Fix Wrong price for xScream - [Issue-983](https://github.com/covalenthq/scout/issues/983) 

- Fix offset in decoding array in ABI - [Issue-1016](https://github.com/covalenthq/scout/issues/1016) 

- Fix TimeOut on Covalent HttpClient this prevents arbitrary timeouts for balances_v2 endpoint - [Issue-1037](https://github.com/covalenthq/scout/issues/1037)
