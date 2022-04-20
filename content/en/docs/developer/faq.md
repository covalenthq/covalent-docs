---
title: API FAQ
weight: 99

---

# FAQs
These FAQs are a self-serve support resource for the [Covalent API](https://www.covalenthq.com/docs/api/) and organized into the following sections:
1. [General Use](#general-use)
2. [Class A Endpoints](#class-a-endpoints)
3. [Class B Endpoints](#class-b-endpoints)
4. [Pricing Endpoints](#pricing-endpoints)
5. [Miscellaneous](#miscellaneous)

---

## General Use
### How do I query an endpoint?
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
### What can I build using the API?
The Covalent API can be used across a wide variety of Web3 use cases from custom wallets, to NFT marketplaces and dashboards to gaming. Learn how to build popular Web3 dapps using the API by checking out our use case examples [here](https://docs.google.com/presentation/d/1bvZ3l2b28PNKRC6AkBryXlReS1ZF4xCQJy-22nawUBc/edit?usp=sharing).


&nbsp;
### When should I use Basic Auth over authenticating via query parameter?
We recommend that you should always use Basic Auth over authenticating via query parameter **when possible.** Authentication via query parameter is offered for all endpoints to make it very simple for developers to use the API:

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
### What is the `chain_id`?
The `chain_id` parameter is the unique integer identifier of an EVM-supported blockchain network. A global list of EVM network Chain IDs can be found at: https://chainlist.org/. For example, Ethereum Mainnet has a `chain_id` of `1` while Ethereum Kovan Testnet has a `chain_id` of `42`.

See the full list of Covalent API [supported networks](https://www.covalenthq.com/docs/networks/) and their corresponding `chain_id` values.

&nbsp;
### What are the current API rate limits?
- **5** requests per second per API key (~13M requests per month)
- **1,000,000** block range per request for endpoints (such as decoded log events) requiring a block range

&nbsp;
### What if I need a higher API rate limit?
In most of the cases, we have noticed that clients don’t actually need higher rate limits as they can do the following:
- Random access: distribute/queue their load at a gateway level to smooth unpredicted spikes
- Per-client polling: distribute their clients’ polls within the polling period using client-ID hashing.

Here are some steps we recommend to optimize the client-side code:
- Create a queue for your requests.
- Have a thread that pops requests from the queue at a rate of no more than 5 per second and kicks them off asynchronously (e.g. in a new thread/fiber or in a worker pool).

&nbsp;
### Why do I only get back 100 items (or rows) of data?
By default, the API returns 100 items in a single page. To get all the data, simply pass a large value for the `page-size` parameter in your request.

&nbsp;
### What do the following error messages mean in the context of the Covalent API?
- **404: Page Unavailable** - The API server cannot find the requested API resource. Check your request endpoint.
- **406: Address Will Predictably Timeout** - The API returns this error for addresses where requests will likely timeout due to, as an example, too many transactions associated with the address. 
- **429: Too Many Requests** - The client has surpassed its rate limit. This may also be indicated by the server *503: Network Error*.
- **500: Request Timeout** - This error response is given when the query will take longer than approximately 90 seconds.
- **503: Network Error** - The API server cannot handle the request at the time, which might be due to a high number of concurrent requests or if a server is momentarily down. Retry your request in a couple minutes or reduce the number of concurrent requests.
- **507: Insufficient Storage** - The API server is unreachable to new queries as the backlog of existing queries is full. We are likely aware of the issue and reviewing the queries consuming the resources.
- **562: Failed to connect to upstream third-party service** - The API server can’t reach the external server where the data is hosted at the moment. This is intentionally done in order to avoid returning erroneous data.


&nbsp;
### How do I get data in `CSV` format?
Just use the query parameter `format=csv` in your request. For example:

```
https://api.covalenthq.com/v1/1/address/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/balances_v2/?key=YOUR_API_KEY&format=csv
```
&nbsp;  
Using our [API Reference](https://www.covalenthq.com/docs/api), you can also switch to Analyst Mode in the global settings and download files directly in CSV format. 

&nbsp;
### How do I fix the *CORS header ‘Access-Control-Allow-Origin’ missing* error?
[CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) is an HTTP header-based mechanism that allows a server to indicate any origins
(domain, scheme, or port) other than its own from which a browser should permit loading resources. If you are running your app locally on `localhost`, you may run into this error when trying to make API calls.

One workaround is to use this [extension](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en).


---
&nbsp;
## Class A Endpoints
### Why is the `logo_url` sometimes missing in the response of `Get token balances for address`?
We fetch the logos from the Trust Wallet [repository](https://github.com/trustwallet/assets). If your logo is not available there, the token balances endpoint will not be able to fetch it.

Use the Trust Wallet [Assets web app](https://assets.trustwallet.com/) to add your token and corresponding logo. 

&nbsp;
### Why are some NFT collections not found using the `Get historical data for NFT collection` endpoint, even though they are found using the `Get NFT external metadata for contract`?

The `Get historical data for NFT Collection` only supports collections that have had *sales activity* on a [supported NFT marketplaces](https://www.covalenthq.com/docs/api/#/0/Get%20historical%20data%20for%20NFT%20collection/USD/137). 

`Get NFT external metadata for contract` supports *all* chains and collections.

<!-- &nbsp;
### 2.X Why is the `nft_data` array sometimes empty in the response of `Get token balances for address`?

This appears to happen when the NFT collection is minted on Polygon Mainnet using OpenSea and that NFT data is centrally stored. This issue exists (almost all the time) with NFT data that is stored centrally with OpenSea. Unfortunately, there is nothing we can do and the fix has to be made from the OpenSea end. -->
&nbsp;
### Why does the call to `Get token balances for address` sometimes timeout when using the `nft=true` option?

Timouts using the `nft=true` option are likely due to corresponding timeouts with an *external service call* made by our API to fetch the NFT metadata. You can confirm this by making the same call and setting `no-nft-fetch=true` and see if that returns successfully.

&nbsp;
### What is a “dust” token?
When fetching token balances for an externally owned account (EOA), if a token's `quote` value is less than `0.10` USD equivalent, it is classified as `dust`.


---
&nbsp;
## Class B Endpoints
### Why are there data issues with the PancakeSwap endpoints?
The standalone PancakeSwap Class B endpoints are no longer maintained as PancakeSwap is now a supported DEX under the `XY=K` category of endpoints. 

You can try the PancakeSwap `XY=K` endpoints [here](https://www.covalenthq.com/docs/api/#/0/Get%20XY=K%20address%20exchange%20balances/USD/56) using `pancakeswap_v2` as the `dexname` and `chain_id=56` for BSC Mainnet.


---
&nbsp;
## Pricing Endpoints
### Why are the token quote rates different than the rates from another provider like CoinGecko?
Token quote rates are currently fetched in BTC and then coverted into USD which likely causes the discrepancies. This will be changed soon with the launch of a new pricing endpoint powered by AMMs across all supported blockchains.


---
&nbsp;
## Miscellaneous
### How do I contact Developer Support when I’m stuck?

We have API support staff available on [Discord](https://covalenthq.com/discord). Please ask all questions in the `#feedback-and-support` channel.

<!-- &nbsp;
### 5.2 How can I showcase my project with Covalent?
We'd love to showcase your work to our community of partners and developers! Please complete this short [typeform](https://covalenthq.typeform.com/showcase) to submit your project details.  -->

