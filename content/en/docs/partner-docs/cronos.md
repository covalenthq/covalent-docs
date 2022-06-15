---
title: Cronos Docs
LinkTitle: cronos-docs
hidden: false
---

{{< partnerDocsTemplate blockchain="cronos" mainnet="25" testnet="NA" apiReferenceChain="25" >}}
&nbsp;
# About Covalent
{{< aboutCovalent >}}

<!-- # Introduction

[Covalent](https://www.covalenthq.com/?utm_source=cronos&utm_medium=partner-docs) provides a unified API to bring full transparency and visibility to assets across all blockchains including Cronos's Mainnet Beta.

To get started, sign up for an [**API Key**](https://www.covalenthq.com/platform/?utm_source=cronos&utm_medium=partner-docs). 

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](https://www.covalenthq.com/static/images/partner-docs/developer_mode.png) | ![Analyst Mode](https://www.covalenthq.com/static/images/partner-docs/analyst_mode.png)|

The Covalent API is RESTful and offers the following out-of-the-box for *Cronos*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Request volume limit** | None |
| **Request rate limit** | 5 requests per second |
| **Base URL** | https://api.covalenthq.com/v1/|
| **Networks & `chain_id`** | Mainnet Beta - `25` |
| **Supported Endpoints** | **Class A Universal** <br>- [Balances](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/25) <br> - [Transactions](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/25) <br> - [Transfers](https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/25) <br> - [Token Holders](https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/25) <br> - [Log Events (Contract Address)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/25) <br> - [Log Events (Topic Hash)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/25)

Try the supported endpoints directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=cronos&utm_medium=partner-docs) or use the following code examples. **The JSON response format is the same for all endpoints:**
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
const cronosChainId = '25'
const demoAddress = '0xFEC4f9D5B322Aa834056E85946A32c35A3f5aDD8'

async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

// Example address request
getWalletBalance(cronosChainId, demoAddress);
```

### Python
```
import requests

API_KEY = 'YOUR API KEY'
base_url = 'https://api.covalenthq.com/v1'
cronos_chain_id = '25'
demo_address = '0xFEC4f9D5B322Aa834056E85946A32c35A3f5aDD8'

def get_wallet_balance(chain_id, address):
    endpoint = f'/{chain_id}/address/{address}/balances_v2/?key={API_KEY}'
    url = base_url + endpoint
    result = requests.get(url).json()
    data = result["data"]
    print(data)
    return(data)


# Example address request
get_wallet_balance(cronos_chain_id, demo_address)
```

&nbsp;
# Use Cases
{{< usecases >}}

&nbsp;
# Resources
Here are some additional resources to help you get started with the Covalent API:
- [Cronos Network Details](https://www.covalenthq.com/docs/networks/cronos/?utm_source=cronos&utm_medium=partner-docs)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=cronos&utm_medium=partner-docs)
- [Project Showcase](https://www.covalenthq.com/docs/project-showcase/?utm_source=cronos&utm_medium=partner-docs)
- [API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=cronos&utm_medium=partner-docs)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=cronos&utm_medium=partner-docs)

&nbsp;
# About Covalent
{{< aboutCovalent >}} -->
