---
title: API FAQ
weight: 99

---

**# FAQ**

These questions serve as a self-serve resource for using the [Covalent API](https://www.covalenthq.com/docs/api/) and provide additional information required to query the Covalent API.The APIs are divided into the same categories that we use for the endpoints with an additional one regarding usage of API.

1. [API Usage](#api-usage)

2. [Class A Endpoints](#class-a-endpoints)

3. [Class B Endpoints](#class-b-endpoints)

4. [Pricing Endpoints](#pricing-endpoints)

5. [Miscellaneous](#miscellaneous)

- --

**## **1. API Usage****

**### ******1.1 How do I query an endpoint?********

The URL patterns consist of an API host plus the endpoint path plus your API KEY. The API host URL is: https://api.covalenthq.com/v1/ and all endpoints are called using GET requests. An example endpoint path for getting token balances is `/v1/{chain_id}/address/{address}/balances_v2/`.

Request URL = api path + endpoint path + API_KEY

https://api.covalenthq.com/v1/{chain_id}/address/{address}/balances_v2/

Note - the `/v1/` is NOT repeated

![Query Endpoint](/static/images/faq/query-endpoint.png)

Example URL: https://api.covalenthq.com/v1/1/address/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/balances_v2/?&key=”API_KEY”

Your API KEY starts with `ckey_`.

**### ******1.2 From Query-based Auth and Header-based Auth Which authentication method should I use?********

For better query performance, we recommend using Authentication via Basic Auth.

```

curl -X GET https://api.covalenthq.com/v1/ENDPOINT/ \    -u API_KEY:    -H 'Content-Type: application/json'

```

The colon prevents the curl from asking for a password.

Provide your API key as the basic auth username and pass it in the header. This approach will benefit from our caching mechanism and result in better performance. You can find your API key in the web interface. You do not need to provide a password.

Authentication via Query Parameters is easy to use so it makes it optimal for beginners.

```

curl -X GET https://api.covalenthq.com/v1/ENDPOINT/?key=API_KEY

```

Simply append key=API_KEY as a query parameter to all requests. The main advantage of this method is to embed the API endpoints within applications that do not support more sophisticated auth mechanisms, like Google Sheets or as IFrame.

**### ******1.3 What are Chain IDs and how do I set this parameter on a request?********

Chain IDs are the unique integer ID of an EVM supported blockchain network. A global list of EVM network Chain IDs can be found here: https://chainlist.org/

Covalent network documentation can be found [here](https://www.covalenthq.com/docs/api/#overview--supported-networks)

To set a Chain Id on an API request, simply change the `{chain_id}` query parameter to the value mentioned in the list of supported networks.

**### ******1.4 Are there any API use limits?********

- Users can make 20 concurrent API calls using a single API key. But there are provisions to increase the limit of concurrent API requests depending on the specific case and the request that has been made.
- For decoded log events and other endpoints where you are asked to specify a block range, you are limited to a million block range after which point you need to make a follow-up call using the pagination info.

**### ******1.5 How to address concurrency issues?********

In most of the cases, we have noticed that clients don't actually need higher concurrency limits; they need to either:

- for random access, distribute/queue their load at a gateway level, to smooth unpredicted spikes.
- for per-client polling, distribute their clients' polls within the polling period using client-ID hashing.

The following are some steps we recommend to optimize code on the client-side:

- Create a queue for the requests you are submitting to us.
- Have `N` worker threads pull requests from that queue and synchronously submit them, only taking another request from the queue when the previous one completes.
- Tweak the concurrency-level `N` value. At a certain level, you should not see any `429` errors or socket hangups given the limit rules in our middleware. The ideal `N` is currently ~`24`, but this could be changed at any time to protect our architecture from DoS attacks. Please verify and find the optimal `N` for yourself (or write code that dynamically lowers `N` incrementally upon receiving a 429 error).

**### ******1.6 I only get back 100 items (or rows) of data when I expected a lot more.********

By default, the API returns 100 items on a single page. To get all the data, simply include the `page-size` parameter with a large value in your request.

**### ******1.7 What are the common error messages and what do they mean?********

- ***404 Page unavailable**** - The server cannot find the requested API resource. Check your request endpoint.
- ***500: Request Timeout**** - This error response is given when the query will take longer than approximately 90 seconds.
- ***503: Network Error**** - The server cannot handle the request at the time, which might be due to a high number of concurrent requests or if a server is momentarily down. Retry your request in a couple of minutes or reduce the number of concurrent requests.

**### ******1.8 How do I get and export data in CSV format?********

If making a request via `curl`, just add `&format=csv` to the endpoint.

Example: https://api.covalenthq.com/v1/1/address/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/balances_v2/?&key=”Your-API_KEY”&format=csv

When using the API docs, put `CSV` in the `format` input field.

![format csv](/static/images/faq/format-csv.png)

You can also switch to the Analyst Mode and download files directly from the API Reference. 

**### ******1.9 Why am I getting CORs error: (CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200)?********
([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is an HTTP - header-based mechanism that allows a server to indicate any origins
(domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

One workaround is to use this [extension](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en)

**### ******1.10 How do I batch scrape metadata from a number of token_Ids and not be rate-limited?********

The data we have for the NFT metadata endpoint isn’t limited by our ability to scale. The bottleneck isn’t with us, it’s with the origin websites we’re scraping the data from.

Every time we see a novel NFT Token ID, we have to scrape some HTTP (or IPFS, but usually HTTP) origin somewhere. We could pretty easily stream out a raw firehose of all discovered NFT metadata to you but it will eventually hit the origin side bottleneck.

What we can offer you is a one-time bulk export of NFT metadata. Send us an email to support@covalenthq.com with the NFT collection addresses and we will get back to you.

- --

**## **2. Class A Endpoints****

**### ******2.1 Why sometimes in Balances Endpoint logo_url doesn’t work?********

We fetch the logos from the Trust wallet [repository](https://github.com/trustwallet/assets)

If the logo is not available there, it won’t show up. The best way for it to show up is to upload it there.

You can even also use a token list endpoint or your Github repository where those logos exist at support@covalenthq.com

**### ******2.2 Why is it that the nft_data array is empty when I use the ‘Get Token Balances for address' endpoint?********

Most of the time this happens when the NFT collection was minted on OpenSea contract and is live on Polygon Mainnet. This issue exists (almost all the time) with NFT data that is stored centrally with OpenSea. Unfortunately, there is nothing we can do and the fix has to be made from the OpenSea end.

**### ******2.3 Why is it that some NFT collections are not found using the Historical Data for NFT Collection endpoint, even when they can be found using Get NFT external Metadata?********

Historical Data for NFT Collection only supports collections that had sales on the supported markets. Supported markets can be found directly in API Reference [here](https://www.covalenthq.com/docs/api/#/0/Get%20NFT%20external%20metadata%20for%20contract/USD/1).

Get NFT external Metadata supports all chains and collections.

**### ******2.4 Why sometimes my balances call times out with nft=true ?********

With `nft` = `true`, the timeout on API call can be due to the external call to the metadata URL being unable to fetch the NFT metadata. Try the call with `no-nft-fetch` = `true`. Since the problem lies in the external URL which contains the metadata, it is out of our control.

**### ******2.5 What is a “dust” token?********

In an address balance, when for a certain token `quote` is less than `0.1` USD, it is classified as `dust`. Note that it must be less than `0.1` USD and not denominated in the respective currency of choice.

- --

**## **3. Class B Endpoints****

**### ******3.1 Why the PancakeSwap endpoints sometimes don't show correct data?********

PancakeSwap endpoint is not maintained anymore. We have moved Pancake Swap under XYK Umbrella. You can try them [here](https://www.covalenthq.com/docs/api/#/0/Get%20Pancakeswap%20v2%20pools/USD/1). To switch to PancakeSwap, select `dexname` to `pancakeswap_v2` and `chain_id` to `56`.

- --

**## **4. Pricing Endpoints****

**### ******4.1 Why quote rate of tokens differ that from CoinGecko?********

We denominate tokens in BTC instead of USD. For example, if the price of the token is 0.000001 USD but 0 BTC, we fetch prices in BTC value and that causes discrepancies.

We are going to change the price denomination in USD soon to launch a new pricing endpoint powered by AMMs across all the blockchains we support.

- --

**## **5. Miscellaneous****

**### ******5.1 How do I contact Developer Support when I’m stuck?********

We have API support staff available on [Discord](https://covalenthq.com/discord). Please ask all questions in the `#feedback-and-support` channel.

**### ******5.2 How can I partner with Covalent on my project?********

We are delighted to hear that you are considering partnering with us! Kindly send an email to media@covalenthq.com.
