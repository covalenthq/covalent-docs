---
title: Ankr
order: 2
hidden: false
featuredImage: ./images/ankr-banner.png
description: Ankr is democratizing Web3 for everyone to leverage decentralized applications and play an active role in the future internet.
---

# Ankr

## Overview

Here at Ankr we make node infrastructure that is easy, accessible, affordable and instantly distributed across the globe.
 
Currently, we have three different lines of business:
Staking Nodes - One-click solutions for staking nodes with rewards earning possibilities.
Developer APIs - Easily build Web3 products with instant API access to major blockchain and DeFi protocols.
Enterprise Solutions - Turnkey infrastructure solutions for cryptocurrency exchanges, staking platforms, data analytics providers and more.
These docs will focus on the Ankr API’s that align with what Covalent offers. Full documentation [here](https://docs.ankr.com/).

&nbsp;

### Deploy an API
1. Head to [app.ankr.com](app.ankr.com) and create an account. After creating an account, sign in to access your dashboard on ankr. Next click the **APIs** button from the left menu.
![ankr-dashboard](./images/ankr/dashboard.png)
2. Here you should see a list of your active APIs in case you deployed any. Click the blue **Create** button to deploy a new one.
![ankr-dashboard](./images/ankr/create.png)
3. Choose the API you wish to deploy from the API Market list and click **Create API**.
![ankr-dashboard](./images/ankr/deploy.png)
Provide the **Project** name and choose the **Network** for which you wish to deploy the API and click **Next**.
![ankr-dashboard](./images/ankr/network.png)
### Get the API endpoint
A new API server should be deployed in a couple of minutes. You can then copy the generated endpoint and start querying:
![ankr-dashboard](./images/ankr/endpoint.png)
&nbsp;

### Binance Smart Chain
Binance Smart Chain brings EVM-compatible smart contract functionality to Binance Chain. Thanks to a dual-chain architecture with cross-chain communication, users can create dApps and tokens on the Smart Chain and leverage Binance Chain for fast trading on Binance DEX.
Full documentation on JSON-RPC Endpoint is available [here](https://docs.binance.org/smart-chain/developer/rpc.html)
The official RPC API description can be found [here](https://eth.wiki/json-rpc/API).

&nbsp;
 
### Ethereum
Launched in 2015, Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether. It enables SmartContracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control, or interference from a third party
The official RPC API description can be found [here](https://eth.wiki/json-rpc/API).

&nbsp;

### Polkadot
Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.
There are a lot of parachains that share the same underlying technology as Polkadot, and that leads to the fact that they will share the same RPC-API calls.
The official RPC-API documentation can be found [here](https://polkadot.js.org/docs/api/).
 
&nbsp;

### Polygon/Matic
The Matic Network is a blockchain scalability platform which provides secure, scalable and instant transactions powered by PoS side chains and an adapted version of Plasma with PoS based side chains.
Available Endpoints on Ankr
Matic is using a dual-consensus architecture on the Matic Network to optimise for speed and decentralisation. The two layers are Bor and Heimdall which have their own separate end-points, for more information about that, please follow this link.
Both end-points are available on the Ankr Platform.
Json-RPC
[Bor RPC documentation](https://eth.wiki/json-rpc/API)
REST API
[Heimdall Rest documentation](https://docs.tendermint.com/master/rpc/)
