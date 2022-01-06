---
title: December 2021
order: 12
hidden: false
description: Astar-Shiden, IoTeX networks indexed.
---

## 2021-12-17

### ADDED

- Since the introduction of the `XY=K` suite of endpoints, developers using our API have been given the powers to build projects across our supported Decentralized Exchanges (DEXES). To make the experience even more easy for developers, we have added a new `XY=K` endpoint, [GET XY=K Supported Networks](https://www.covalenthq.com/docs/api/#/0/Class-B/Get-XY=K-Network-Exchange-Tokens/lng=en), which will make it easy for developers using our API to know the current number of supported endpoints and also see the `swap fee` for each DEX. The returned data also includes: `factory_contract_address` and `router_contract_address`. `<data-accessibility>`

- [Astar-Shiden](https://www.covalenthq.com/docs/networks/astar/) Network is now fully indexed! Astar Blockchain is built with Parity’s substrate framework. Astar thus makes it possible to scale dApps built on Polkadot. This is because: The Polkadot Relaychain, by design, does not support smart contracts. Developers can leverage on the Covalent API to build dApps on Astar network information. Covalent API users can query ALL Class A endpoint and return Astar network data by setting chainID: 336. `<multichain>`

- [IoTeX](https://www.covalenthq.com/docs/networks/iotex/) Mainnet and Testnet launched! IoTeX is designed to be the backbone for Internet of Things (IoT) on the Blockchain. With IoTeX data now fully indexed by the Covalent API, developers can build a plethora of User facing (UI) dApps. IoTeX data can be queried using All Covalent Class A endpoints. IoTeX Mainnet chainID: 4689. IoTeX Testnet chainID: 4690. `<multi-chain>`

### UPDATED

- Given the amount of feedback from developers using the Covalent API, we have increased the number of of DEXES supported via the `XY=K` suite of endpoints. The newly added DEXES are:
`TraderJoe` on Avalanche Mainnet.
`Standard` on Astar-Shiden Network.
`ApeSwap_v2` on BSC Mainnet.
`<data-accessibility>`

### BUG FIXES

- Fix Token Holders Pagination [Issue-1322](https://github.com/covalenthq/scout/issues/1322)
- [Fix](https://github.com/covalenthq/scout/commit/1394cfc229d7857a65defe5c535c1c08a2735f01): Arbitrum Gas Currency Fix 


