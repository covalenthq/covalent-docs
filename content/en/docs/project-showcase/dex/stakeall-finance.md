---
title: Stakeall Finance
hidden: false
weight: 3
featuredImage: /static/images/project-showcase/stakeall-finance.png
description: DeFi Platform for staking in various POS protocols.  
---

![Stake All Finance Banner](/static/images/project-showcase/banners/stakeall-finance.png)

&nbsp;

# Stake All Finance

### Website

https://stakeall.finance/

<Aside>

"We built a function for a re-usable Chainlink External Adapter for an iterative Covalent job that tracks interactions to a specific protocol's contract."

</Aside>

&nbsp;

DeFi Platform for staking in various POS protocols.

### Note from the Developers

Allows users to borrow from AAVE, swap from 1inch and stake to POS based protocol in a single transaction for earning passive income. There is huge market for staking/delegation to  various inflation based POS protocols like Graph Network, Matic Network, Livepeer, Nucypher and many more.

Currently there is no single decentralised platform available to enable delegation to these POS protocols along with leveraging different DeFi legos like AAVE, 1Inch, Uniswap, compound etc **stakeall.finance** aims to provide a single platform for easily managing delegation to these POS protocols by leveraging integrations of various DeFi protocols. Users can use this platform to borrow from lending protocols like AAVE and Compound, swap tokens from decentralised exchanges like 1inch and Uniswap, and stake to POS protocols in single transactions for earning passive income. With these features available in one click, it saves significant gas cost and time for users. 

Below are the use-cases supported:
1. Wallet Creation: Platform allows user to create on chain wallet to manage their funds.
2. Staking using wallet: With this feature, users can use funds available in various wallets to delegate to POS protocols.
3. Swap and Stake : This allows user to swap funds with best rates to the currency required by POS protocol and stake it. It save significant gas cost and time as this is done in single transaction.
4. Borrow and Stake: This feature allows user to use funds as collateral to borrow for lending protocols, swap them at best exchange rate in desired currency and stake it to POS protocols. Platform enables user to compare interest rates and swap amount across various assets

Again, this saves significant gas cost and time as this is done in single transaction. **stakeall.finance** smart contracts are designed in a way that makes it possible to integrate it with various DeFi and POS protocols.

We also created a smart contract wallet which is deployed for each user to manage their assets.

We have integrated with below mentioned protocols in the project:

1. AAVE V2: We used AAVE V2 protocol for depositing users funds as a collateral to borrow assets for staking.
2. 1Inch Exchange: We used 1inch exchange contracts to swap assets in desired staking currency.
3. Graph Protocol: Our smart contracts are integrated with The Graph Protocol smart contracts to enable delegation to indexers.
4. Matic Network: Our smart contracts are integrated with Polygon(Matic) Network smart contracts to enable delegation to validators.
5. Covalent API: We used covalent API to fetch latest cryptocurrency prices and balances of an account.

Apart from the above integration our smart contracts are written in solidity language, we are using hardhat for forking mainnet for testing purpose and Front end is written in Next.js.

&nbsp;

### Event

The project was built at [EthGlobal - HackMoney 2021](https://www.covalenthq.com/blog/ethglobal-hackmoney-winners/)

&nbsp;

### Developers

- Crypto Staker: _Discord - @cryptostaker#6922_
- Robin Eth: _Discord - @bruce#4995_
- Antony Syriac: _Discord - @anto#7788_