---
title: Moralis Plugin
weight: 3
description: Use the Covalent Unified API within the Moralis SDK
---

# Introduction
[Moralis](https://moralis.io/?utm_source=covalent&utm_campaign=docs) provides a single workflow for building high performance web3 applications. The [Covalent Moralis plugin](https://moralis.io/plugins/covalent/?utm_source=covalent&utm_campaign=docs) is a wrapper around the Covalent Unified API to pull cross-chain historical and granular data seamlessly from within the Moralis SDK.


{{< youtube EdNH2A8TsUA >}}

&nbsp;
# Code Example

See the full Covalent Moralis plugin documentation [here](https://moralis.io/plugins/covalent/?utm_source=covalent&utm_campaign=docs).

The following examples shows how, given the `chainId`, user address and an ERC20 token contract address, a user can get all the ERC20 token transfers along with their historical prices at the time of transfer:

```jsx
interface GetErc20TokenTransactionsForAddressDto {
  chainId: number;
  address: Address;
  tokenAddress: Address;
  quoteCurrency?: string;
  pageNumber?: number;
  pageSize?: number;
}


await Moralis.Plugins.covalent.getErc20TokenTransfersForAddress(GetErc20TokenTransactionsForAddressDto);
```