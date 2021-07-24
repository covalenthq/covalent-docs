---
title: Crystal ETH
order: 2
hidden: false
author: anadi2311
updated: 2021-05-30
featuredImage: ../images/crystaleth.png
description: DeFi Yield Management
tags:
  - NFT
---

![Crystal ETH Banner](../images/crystaleth.png)

&nbsp;
# Crystal ETH

### Website
http://crystaleth.finance/

<Aside>

"DeFi Yield Management."

</Aside>

### Note from the Developers
CrystalEth is an open source, fully descentralized protocol that leverages the Ethereum DeFi 
ecosystem to generate yield through modular investment plugins native to the platform. 
The yield is distributed to CRY Token stakeholders as hourly dividends and prize pools. 
Users can get and stake CRY Token and receive hourly dividends in stablecoins (USDT).	

&nbsp;
### Use of Covalent API
- [`Get token balances for address`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/balances_v2/) To fetch the address balances.
- [`Get transactions`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/address/{address}/transactions_v2/) To fetch all the address transactions.
All extracted data was then used in JSON format.
- [`Get Log events by contract address`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/address/{address}/) To get the `swaps` for each pool.
- [`Get Log events by topic hash(es)`](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/topics/{topic}/) To get the `transfers`, `adds/removes` for each pool.


&nbsp;
### Event
The project was built using the Covalent API at 2021 [Moralis](https://moralis.io/moralis-partners-with-covalent-for-2021-moralis-hackathon/) Hackathon

&nbsp;
