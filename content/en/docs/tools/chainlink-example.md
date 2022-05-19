---
title: Chainlink Example
weight: 2
description: Learn how to use the Covalent API with Chainlink 
---


# Introduction
[Chainlink](https://chain.link/) is a decentralized oracle network that connects smart contracts with off-chain data and services. With Chainlink, smart contracts, which are typically isolated blocks of code, can access any external data using external APIs *including* the Covalent API!

Recently, we have seen developers explore using various and interesting on-chain data feeds, via the Covalent API, into smart contracts. For example, [this project](https://showcase.ethglobal.com/roadtoweb3/risk) uses an NFT collection floor price data feed to create a betting game.

Other interesting data feeds that can lead to interesting applications and use cases, and can be easily obtained using the Covalent API, include:
- NFT collection market caps
- DEX trading volumes & liquidity
- Externally Owned Accounts(EOA) balances & transactions
- Multi-chain log events



# Use the Covalent API with Chainlink
This [Chainlink documentation](https://docs.chain.link/docs/make-a-http-get-request/) demonstrates how to make an HTTP GET request to an external API from a smart contract, using Chainlink's [Request & Receive Data](https://docs.chain.link/docs/advanced-tutorial/) cycle. Because there are existing oracle nodes on major public mainnets and testnets, which are configured to make HTTP GET requests and handle a JSON response object, no specific Covalent-Chainlink node or external adapter has been created. This might be something to evaluate in the future. 


In general, the smart contract inherit from `ChainlinkClient` to consume an API request and use a struct called `Chainlink.Request` to build the API request which includes:

- Oracle address
- Job id
- Request fee
- Task parameters
- Callback function signature

To use the Covalent API, the process is as follows:

- Identify an appropriate Chainlink node to use, which supports HTTP GET, from https://market.link/search/jobs . Note that there are unique jobs (and thus `jobId`s) for different response data formats such as `Bytes32` (strings) or Uint256 (integers). Note the node's `address`, `jobId` and `fee`. In the code examples below, we are using both the `Get > Bytes32` and `Get > Uint256` jobs. 

- In the smart contract, set the `oracle` node address, `jobId` and `fee` in the constructor. Also, set the [`LINK` token contract address](https://docs.chain.link/docs/link-token-contracts/) for the network being used. 

- Copy the full Covalent API URL for the request struct in the smart contract. 
    > **Note:** the smart contract examples below make use of the Chainlink DevRel oracle nodes on the Kovan testnet with a fee of 0.1 LINK. The limit of a single Covalent API response size that can be processed by these nodes seems to be approximately 28KB. Use the `page-size` and other query parameters on the Covalent API when making the request to limit your response size. 

- Set the appropriate path to find the desired data in the API JSON response.

- Compile and deploy the contract. Note the contract `address`. 

- Send the contract `address` some LINK tokens which will be paid by the contract to the oracle node processing the API request. You can use the [LINK testnet faucet](https://faucets.chain.link/) to get some test tokens.

- Call your smart contract data fetch function, which in turn makes the call to the Covalent API for a custom data feed into the contract!


# Code Examples
These contracts are modified versions of examples found on [Chainlink's docs](https://docs.chain.link/docs/make-a-http-get-request/). 

## String Data Feed
The following smart contract code example uses Chainlink to make a call to the following Covalent API endpoint to fetch the 7-day average floor price of the largest NFT collection on Ethereum Mainnet: https://api.covalenthq.com/v1/1/nft_market/?quote-currency=USD&format=JSON&page-size=10&key=ckey_c219e0eef35648a89dffe25e770


```jsx
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract FetchStringFromCovalentAPI is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    string public floorprice;

    bytes32 private jobId;
    uint256 private fee;

    event RequestFloorPrice(bytes32 indexed requestId, string floorprice);

    /**
     * @notice Initialize the link token and target oracle
     *
     * Kovan Testnet details:
     * Link Token: 0xa36085F69e2889c224210F603D836748e7dC0088
     * Oracle: 0x74EcC8Bdeb76F2C6760eD2dc8A46ca5e581fA656 (Chainlink DevRel)
     * jobId: 7d80a6386ef543a3abb52817f6707e3b
     *
     */
    constructor() {
        setChainlinkToken(0xa36085F69e2889c224210F603D836748e7dC0088);
        setChainlinkOracle(0x74EcC8Bdeb76F2C6760eD2dc8A46ca5e581fA656);
        jobId = '7d80a6386ef543a3abb52817f6707e3b';
        fee = 0.1 * 10**18; // (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data which is located in a list
     */
    function requestFloorPrice() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

        // Set the URL to perform the GET request
        // API docs: https://covalenthq.com/docs/api
        req.add('get', 'https://api.covalenthq.com/v1/1/nft_market/?quote-currency=USD&format=JSON&page-size=10&key=ckey_c219e0eef35648a89dffe25e770');

        // Set the path to find the desired data in the API response 
        req.add('path', 'data,items,0,floor_price_wei_7d'); // Chainlink nodes 1.0.0 and later support this format
        
        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of string
     */
    function fulfill(bytes32 _requestId, string memory _floorprice) public recordChainlinkFulfillment(_requestId) {
        emit RequestFloorPrice(_requestId, _floorprice);
        floorprice = _floorprice;
    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}

```


## Integer Data Feed
The following smart contract code example uses Chainlink to make a call to the following Covalent API endpoint to fetch the current price of ETH: https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=ETH&page-size=10&key=ckey_c219e0eef35648a89dffe25e770

```jsx
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract FetchPriceFromCovalentAPI is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    uint256 public price;

    bytes32 private jobId;
    uint256 private fee;

    event RequestETHPrice(bytes32 indexed requestId, uint256 price);

    /**
     * @notice Initialize the link token and target oracle
     *
     * Kovan Testnet details:
     * Link Token: 0xa36085F69e2889c224210F603D836748e7dC0088
     * Oracle: 0x74EcC8Bdeb76F2C6760eD2dc8A46ca5e581fA656 (Chainlink DevRel)
     * jobId: 7d80a6386ef543a3abb52817f6707e3b
     *
     */
    constructor() {
        setChainlinkToken(0xa36085F69e2889c224210F603D836748e7dC0088);
        setChainlinkOracle(0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8);
        jobId = 'd5270d1c311941d0b08bead21fea7747';
        fee = 0.1 * 10**18; // (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data which is located in a list
     */
    function requestETHPrice() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

        // Set the URL to perform the GET request on
        // API docs: https://covalenthq.com/docs/api
        req.add('get', 'https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=ETH&page-size=10&key=ckey_c219e0eef35648a89dffe25e770');

        // Set the path to find the desired data in the API response 
        req.add('path', 'data,items,0,quote_rate'); // Chainlink nodes 1.0.0 and later support this format
        
        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of string
     */
    function fulfill(bytes32 _requestId, uint256 _price) public recordChainlinkFulfillment(_requestId) {
        emit RequestETHPrice(_requestId, _price);
        price = _price;
    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}


```