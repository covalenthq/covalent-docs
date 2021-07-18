---
title: Transaction Parsing
updated: 2021-04-30
type: "💻 Code"
order: 4
hidden: false
author: aurelienft
featuredImage: ../images/transaction-parsing.png
description: Learn how to parse transactions data of a native blockchain token from transactions events.
tags:
  - Class A
  - Intermediate
  - Transactions
---

import EmbeddedREPL from "../../../../components/embedded-repl.js";

![Transaction Parsing logo](../images/transaction-parsing.png)


# Transaction Parsing
 

## Learn to parse transaction data from the `Get transactions` API endpoint

The transactions of ERC-20 tokens are parsed by the "Get ERC20 token transfers" API endpoint but a native blockchain token is not considered an ERC-20 standard token so the transactions are not parsed.

In this tutorial you will learn how to parse transactions that include a native token. We will use the Avalanche C-Chain chain but it works the same for others supported networks like Ethereum. 

## Prerequisites

- Have a [replit.com](https://replit.com) account. **Note - you will need to fork a copy of each code snippet below in order to edit it.**

&nbsp;
## Step 1: Get the token address

The native AVAX token has a contract address you can fetch from the Avalanche explorer: https://cchain.explorer.avax.network/address/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/transactions. For this guide we use the AVAX address : `0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7`.

&nbsp;
## Step 2: Filter transactions

Now we go though the real part ! We are going to start by filtering transactions types.

There are 2 possible transaction patterns for a **swap**:
- A transaction with a first log event called a `Swap`.
- A transaction with a first log event called a `Withdrawal` and second log event called a `Swap`. 

In the following repl, the provided code makes a call to fetch *all* transactions. 

Your task is to filter the transactions to display those transactions separated by their `Swap` patterns by doing the following:

1. Replace the three dots on lines 12 and 14 to make the code pass the unit test. 

**Note: When you first try to edit the code, you will be prompted to "Fork & edit this repl". If you are logged into replit.com, you can do this seamlessly without leaving the page.**

2. Click on the `Run` button to run tests to see if you did this correctly.

<EmbeddedREPL address="https://replit.com/@AurelienFT/First-Exercise-Transaction-Parsing?lite=true" />

Well done ! You have filtered the two swap patterns!

&nbsp;
### Step 3: Filter the transactions that match the token: AVAX

Now we want to filter to get only the swaps that include AVAX tokens.

Your task is to:
1. Edit the following code by replacing the three dots by the address of the AVAX token to return only the transactions which includes AVAX:

<EmbeddedREPL address="https://replit.com/@AurelienFT/Second-Exercise-Transaction-Parsing?lite=true" />

Well done. Now we just have the AVAX swap transactions.

&nbsp;
### Step 4: Get the amount of exchanged tokens

The price is in the `Swap` event. As we saw before, we have two patterns and the `Swap` log is not in the same position in the two patterns. To get the price we will use this formula :
```
t.log_events[{position_of_swap_log}].decoded.params[{position_of_price}].value / 10**token.contract_decimals
```

The `Swap` log event has two pairs of parameters:
- `amount0In` (position 1 in array of parameters) / `amount1Out`(position 4 in array of parameters)
- `amount1In` (position 2 in array of parameters) /
`amount0Out` (position 3 in array of parameters)

In this repl we have the last code and a new function that must return the prices. Your task is to:
1. Replace the three dots in the follow code to make tests pass.

<EmbeddedREPL address="https://replit.com/@AurelienFT/Third-Exercice-Transaction-Parsing?lite=true" />

Tada! Now you have the prices. You can also get the gas with the formula :
```
transaction.gas_spent*transaction.gas_price/10**18
```

I hope the tutorial was cool and you learned something ! If you have any feedback or you want help, please ask on Discord.