---
title: API FAQ
weight: 99

---

# FAQs
These FAQs are a self-serve support resource for the [Covalent API](https://www.covalenthq.com/docs/api/) and broken down into the following sections:
1. [General Use](#1-general-use)
2. [Class A Endpoints](#2-class-a-endpoints)
3. [Class B Endpoints](#3-class-b-endpoints)
4. [Pricing Endpoints](#4-pricing-endpoints)
5. [Miscellaneous](#5-miscellaneous)


---
&nbsp;
## 1. General Use
### 1.1 How do I query an endpoint?
The API host for all requests is `https://api.covalenthq.com/v1/`. 

The endpoint path is appended to the API host (without repeating the `/v1/`). For example, if the endpoint is: 

![Query Endpoint](/static/images/faq/query-endpoint.png)

then an example of the full request URL is simply:

```
https://api.covalenthq.com/v1/1/address/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/balances_v2/
```
&nbsp;  
All Covalent API endpoints are called using `GET` requests.

Each request must include your `API_KEY` passed either in the request header (Basic Auth) or as a query parameter (see below).

Your `API_KEY` starts with `ckey_`.

&nbsp;
### 1.2 When should I use Basic Auth over authenticating via query parameter?
We recommend that you should always use Basic Auth over authenticating via query parameter **when possible.** Authentication via query parameter is offered for all endpoints to make it very simple for developers to use the Covalent API:

```
curl -X GET https://api.covalenthq.com/v1/ENDPOINT/?key=YOUR_API_KEY
```
&nbsp;  
This works well when embedding the API in applications like Google Sheets or as iFrames that do not support more sophisticated auth methods.
However, a key benefit of using Basic Auth is that your request can reliably take advantage of our caching mechanism for better query performance.

```
curl -X GET https://api.covalenthq.com/v1/ENDPOINT/ \    
    -u API_KEY:   
    -H ‘Content-Type: application/json’
    # The colon prevents curl from asking for a password
```
&nbsp;  
where `API_KEY` is passed as the username with no password.

&nbsp;
### 1.3 What is the `chain_id`?
The `chain_id` parameter is the unique integer identifier of an EVM-supported blockchain network. A global list of EVM network Chain IDs can be found at: https://chainlist.org/. For example, Ethereum Mainnet has a `chain_id` of `1` while Ethereum Kovan Testnet has a `chain_id` of `42`.

See the full list of Covalent API [supported networks](https://www.covalenthq.com/docs/networks/) and their corresponding `chain_id` values.

&nbsp;
### 1.4 What are the current API rate limits?
- **5** requests per second per API key (~13M requests per month)
- **1,000,000** block range per request for endpoints (such as decoded log events) requiring a block range

&nbsp;
### 1.5 What if I need a higher API rate limit?
In most of the cases, we have noticed that clients don’t actually need higher rate limits as they can do the following:
- Random access: distribute/queue their load at a gateway level to smooth unpredicted spikes
- Per-client polling: distribute their clients’ polls within the polling period using client-ID hashing.

Here are some steps we recommend to optimize the client-side code:
- Create a queue for your requests.
- Have `N` worker threads pull requests from that queue and synchronously submit them, only taking another request from the queue when the previous one completes.
- Tweak the concurrency-level `N` value. At a certain level, you should not see any `429` errors or socket hangups given the limit rules in our middleware. The ideal `N` is currently ~`24`, but this could be changed at any time to protect our architecture from DoS attacks. Please verify and find the optimal `N` for yourself (or write code that dynamically lowers `N` incrementally upon receiving a `429` error).

&nbsp;
### 1.6 Why do I only get back 100 items (or rows) of data?
By default, the API returns 100 items in a single page. To get all the data, simply pass a large value for the `page-size` parameter in your request.

&nbsp;
### 1.7 What do the following error messages mean in the context of the Covalent API?
- **404: Page Unavailable** - The API server cannot find the requested API resource. Check your request endpoint.
- **429: Too Many Requests** - The client has surpassed its rate limit. This may also be indicated by the server *503: Network Error*.
- **500: Request Timeout** - This error response is given when the query will take longer than approximately 90 seconds.
- **503: Network Error** - The API server cannot handle the request at the time, which might be due to a high number of concurrent requests or if a server is momentarily down. Retry your request in a couple minutes or reduce the number of concurrent requests.
- **562: Failed to connect to upstream third-party service** - The API server can’t reach the external server where the data is hosted at the moment. This is intentionally done in order to avoid returning erroneous data.


&nbsp;
### 1.8 How do I get data in `CSV` format?
Just use the query parameter `format=csv` in your request. For example:

```
https://api.covalenthq.com/v1/1/address/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/balances_v2/?key=YOUR_API_KEY&format=csv
```
&nbsp;  
Using our [API Reference](https://www.covalenthq.com/docs/api), you can also switch to Analyst Mode in the global settings and download files directly in CSV format. 

&nbsp;
### 1.9 How do I fix the *CORS header ‘Access-Control-Allow-Origin’ missing* error?
[CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) is an HTTP header-based mechanism that allows a server to indicate any origins
(domain, scheme, or port) other than its own from which a browser should permit loading resources. If you are running your app locally on `localhost`, you may run into this error when trying to make API calls.

One workaround is to use this [extension](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en).

&nbsp;
### 1.10 How do I scrape the metadata for a large number of NFTs without exceeding the rate-limits?
We can offer you a one-time bulk export of NFT metadata for a specific collection. Please send an email to support@covalenthq.com with the subject line: `NFT metdata export request for collection {address} on {blockchain name}`.


---
&nbsp;
## 2. Class A Endpoints
### 2.1 Why is the `logo_url` sometimes missing in the response of `Get token balances for address`?
We fetch the logos from the Trust Wallet [repository](https://github.com/trustwallet/assets). If your logo is not available there, the token balances endpoint will not be able to fetch it.

Use the Trust Wallet [Assets web app](https://assets.trustwallet.com/) to add your token and corresponding logo. 

&nbsp;
### 2.2 Why are some NFT collections not found using the `Get historical data for NFT collection` endpoint, even though they are found using the `Get NFT external metadata for contract`?

The `Get historical data for NFT Collection` only supports collections that have had *sales activity* on a [supported NFT marketplaces](https://www.covalenthq.com/docs/api/#/0/Get%20historical%20data%20for%20NFT%20collection/USD/137). 

`Get NFT external metadata for contract` supports *all* chains and collections.

<!-- &nbsp;
### 2.X Why is the `nft_data` array sometimes empty in the response of `Get token balances for address`?

This appears to happen when the NFT collection is minted on Polygon Mainnet using OpenSea and that NFT data is centrally stored. This issue exists (almost all the time) with NFT data that is stored centrally with OpenSea. Unfortunately, there is nothing we can do and the fix has to be made from the OpenSea end. -->
&nbsp;
### 2.3 Why does the call to `Get token balances for address` sometimes timeout when using the `nft=true` option?

Timouts using the `nft=true` option are likely due to corresponding timeouts with an *external service call* made by our API to fetch the NFT metadata. You can confirm this by making the same call and setting `no-nft-fetch=true` and see if that returns successfully.

&nbsp;
### 2.4 What is a “dust” token?

When fetching token balances for an externally owned account (EOA), if a token's `quote` value is less than `0.10` USD equivalent, it is classified as `dust`.


---
&nbsp;
## 3. Class B Endpoints
### 3.1 Why are there data issues with the PancakeSwap endpoints?
The standalone PancakeSwap Class B endpoints are no longer maintained as PancakeSwap is now a supported DEX under the `XY=K` category of endpoints. 

You can try the PancakeSwap `XY=K` endpoints [here](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20address%20exchange%20balances/USD/56) using `pancakeswap_v2` as the `dexname` and `chain_id=56` for BSC Mainnet.


---
&nbsp;
## 4. Pricing Endpoints
### 4.1 Why are the token quote rates different than the rates from another provider like CoinGecko?
Token quote rates are currently fetched in BTC and then coverted into USD, causing discrepancies. This will be changed soon along with the launch of a a new pricing endpoint powered by AMMs across all the blockchains we support.


---
&nbsp;
## 5. Miscellaneous
### 5.1 How do I contact Developer Support when I’m stuck?

We have API support staff available on [Discord](https://covalenthq.com/discord). Please ask all questions in the `#feedback-and-support` channel.

&nbsp;
### 5.2 How can I showcase my project with Covalent?
We'd love to showcase your work to our community of partners and developers! Please complete this short [typeform](https://covalenthq.typeform.com/showcase) to submit your project details. 

