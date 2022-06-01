---
title: API Overview
weight: 0
---

<!-- # API Overview

<section class="overview">    
    <div class="font-light font-sans text-4xl text-covalent-black mt-12 pb-6  max-w-screen-md">
     Overview
    </div>
    <p class="text-xl max-w-5xl text-gray-800 mb-6">
        Covalent provides the industry-leading <strong>Unified API</strong> bringing visibility to billions of Web3 data points. 
    </p>
    <p class="text-xl max-w-5l text-gray-800 mb-6">
        Developers use Covalent to build exciting multi-chain applications like <a href="/docs/project-showcase/wallet">crypto wallets</a>, <a href="/docs/project-showcase/nft">NFT galleries</a>, and <a href="/docs/project-showcase/tools">investor dashboard tools</a> utilizing data from <a href="/docs/networks/">26+ blockchains</a>. Covalent is trusted by a community of 23,000+ developers and 1000+ applications including 0x, Zerion, Rainbow Wallet, Rotki, Bitski and many others.
    </p>
    <div class="font-light font-sans text-4xl mt-12 text-covalent-black max-w-screen-md">
     Getting started with the Unified API
    </div>
    <ol class="list-decimal max-w-3xl pb-6 text-lg ">
    <li class="text-xl my-8"><a target="_blank" href="https://www.covalenthq.com/platform/#/auth/register">Signup for a free API key</a>.</li>
    <li class="text-xl my-8">Try making a sample API request via <pre>cURL</pre>.</li>
    <li class="text-xl my-8">Try building a wallet interface, a tax calculator or a NFT gallery using our read-made templates.</li>
    <li class="text-xl my-8"><a target="_blank" href="https://www.covalenthq.com/docs/api/#/">Read the API Reference</a> documentation for further customizations.</li>
    <li class="text-xl my-8">Join one of our ongoing or upcoming hackathons.</li>
    </ol>
</section> -->

# API Overview

[Covalent](https://www.covalenthq.com/?utm_source=covalent&utm_medium=docs) provides a unified API to bring full transparency and visibility to assets across all blockchain networks.

To get started, sign up for an [**API Key**](https://www.covalenthq.com/platform/?utm_source=blockchain&utm_medium=partner-docs). 

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](https://www.covalenthq.com/static/images/partner-docs/developer_mode.png) | ![Analyst Mode](https://www.covalenthq.com/static/images/partner-docs/analyst_mode.png)|

The Covalent API is RESTful and offers the following out-of-the-box for each supported blockchain:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Request volume limit** | None |
| **Request rate limit** | 5 requests per second |
| **Base URL** | https://api.covalenthq.com/v1/|
| **Sample Endpoints** | **Class A** <br>- [Balances](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1/?utm_source=covalent&utm_medium=docs) <br> - [Transactions](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1/?utm_source=covalent&utm_medium=docs) <br> - [Transfers](https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1/?utm_source=covalent&utm_medium=docs) <br> - [Token Holders](https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1/?utm_source=covalent&utm_medium=docs) <br> - [Log Events (Contract Address)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/1/?utm_source=covalent&utm_medium=docs) <br> - [Log Events (Topic Hash)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1/?utm_source=covalent&utm_medium=docs)

Try the Covalent API directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs) or use the code examples below. **The following JSON response format is the same for all endpoints:**
```
❴ 
    "data": ..., 
    "error": false,
    "error_message": null,
    "error_code": null
❵
```

### Curl
```
curl -X GET "https://api.covalenthq.com/v1/{chain_id}/address/{address}/balances_v2/?key={YOUR API KEY}" -H "Accept: application/json"
```

### JavaScript
```
const APIKEY = 'YOUR API KEY';
const baseURL = 'https://api.covalenthq.com/v1'
const blockchainChainId = '1'
const demoAddress = 'demo.eth'

async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

// Example address request
getWalletBalance(blockchainChainId, demoAddress);
```

### Python
```
import requests

API_KEY = 'YOUR API KEY'
base_url = 'https://api.covalenthq.com/v1'
blockchain_chain_id = '1'
demo_address = 'demo.eth'

def get_wallet_balance(chain_id, address):
    endpoint = f'/{chain_id}/address/{address}/balances_v2/?key={API_KEY}'
    url = base_url + endpoint
    result = requests.get(url).json()
    data = result["data"]
    print(data)
    return(data)


# Example address request
get_wallet_balance(blockchain_chain_id, demo_address)
```

&nbsp;
# Use Cases
The Covalent API supports a broad range of Web3 data use cases including:

| | | | |
| :-----------: | :-----------: | :-----------: | :-----------: |
| ![Gaming](https://www.covalenthq.com/static/images/partner-docs/gaming.png) | ![DeFi](https://www.covalenthq.com/static/images/partner-docs/defi.png) | ![KYC](https://www.covalenthq.com/static/images/partner-docs/kyc.png)| ![NFT](https://www.covalenthq.com/static/images/partner-docs/nft_icon.png)|
| Gaming| DeFi Taxes | KYC | NFTs |
| ![Wallets](https://www.covalenthq.com/static/images/partner-docs/wallets.png) | ![Dashboards](https://www.covalenthq.com/static/images/partner-docs/dashboards.png) | ![On-Chain Forensics](https://www.covalenthq.com/static/images/partner-docs/forensics.png)| ![DAO](https://www.covalenthq.com/static/images/partner-docs/dao.png)|
| Wallets| Dashboards | On-Chain Forensics | DAO Data |
| ![Trading](https://www.covalenthq.com/static/images/partner-docs/trading.png) | ![Predictions](https://www.covalenthq.com/static/images/partner-docs/predictions.png) | ![Governance](https://www.covalenthq.com/static/images/partner-docs/governance.png)| ![Pricing](https://www.covalenthq.com/static/images/partner-docs/pricing.png)|
| DEXs & Trading| Predictive Analytics| Governance | Pricing |


Check out our collection of ready-to-ship [**Code Templates**](https://github.com/covalenthq/web3-templates) that you can use to build your Web3 data-powered apps.

&nbsp;
# Resources
Here are some additional resources to help you get started with the Covalent API:
- [Blockchain Network Details](../networks)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs)
- [Project Showcase](../project-showcase)
- [API FAQs](./faq)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=covalent&utm_medium=docs)
