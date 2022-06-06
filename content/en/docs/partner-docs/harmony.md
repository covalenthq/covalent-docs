---
title: Harmony Docs
LinkTitle: harmony-docs
hidden: false
---

{{< partnerDocsTemplate blockchain="harmony" mainnet="1666600000" testnet="1666700000" apiReferenceChain="1666600000" >}}
&nbsp;
# About Covalent
{{< aboutCovalent >}}

<!-- # Markdown Reference -->
<!-- # Introduction

[Covalent](https://www.covalenthq.com/?utm_source=harmony&utm_medium=partner-docs) provides a unified API to bring full transparency and visibility to assets across all blockchains including Harmony Mainnet and Testnet.

To get started, sign up for an [**API Key**](https://www.covalenthq.com/platform/?utm_source=harmony&utm_medium=partner-docs). 

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](https://www.covalenthq.com/static/images/partner-docs/developer_mode.png) | ![Analyst Mode](https://www.covalenthq.com/static/images/partner-docs/analyst_mode.png)|

The Covalent API is RESTful and offers the following out-of-the-box for *Harmony*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Request volume limit** | None |
| **Request rate limit** | 5 requests per second |
| **Base URL** | https://api.covalenthq.com/v1/|
| **Networks & `chain_id`** | Mainnet: - `1666600000` <br> Testnet: - `1666700000`|
| **Supported Endpoints** | **Class A Universal** <br>- [Balances](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1666600000/?utm_source=harmony&utm_medium=partner-docs) <br> - [Transactions](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1666600000/?utm_source=harmony&utm_medium=partner-docs) <br> - [Transfers](https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1666600000/?utm_source=harmony&utm_medium=partner-docs) <br> - [Token Holders](https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1666600000/?utm_source=harmony&utm_medium=partner-docs) <br> - [Log Events (Contract Address)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/1666600000/?utm_source=harmony&utm_medium=partner-docs) <br> - [Log Events (Topic Hash)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1666600000/?utm_source=harmony&utm_medium=partner-docs)

Try the supported endpoints directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=harmony&utm_medium=partner-docs) or use the following code examples. **The JSON response format is the same for all endpoints:**
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
const HarmonyChainId = '1666600000'
const demoAddress = 'one1xfftrrcjnq807klgc4fu2k3stlgfzzh06tn09u'

async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

// Example address request
getWalletBalance(HarmonyChainId, demoAddress);
```

### Python
```
import requests

API_KEY = 'YOUR API KEY'
base_url = 'https://api.covalenthq.com/v1'
harmony_chain_id = '1666600000'
demo_address = 'one1xfftrrcjnq807klgc4fu2k3stlgfzzh06tn09u'

def get_wallet_balance(chain_id, address):
    endpoint = f'/{chain_id}/address/{address}/balances_v2/?key={API_KEY}'
    url = base_url + endpoint
    result = requests.get(url).json()
    data = result["data"]
    print(data)
    return(data)


# Example address request
get_wallet_balance(harmony_chain_id, demo_address)
```

&nbsp;
# Use Cases
{{< usecases >}}

&nbsp;
# Resources
Here are some additional resources to help you get started with the Covalent API:
- [Harmony Network Details](https://www.covalenthq.com/docs/networks/harmony/?utm_source=harmony&utm_medium=partner-docs)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=harmony&utm_medium=partner-docs)
- [Project Showcase](https://www.covalenthq.com/docs/project-showcase/?utm_source=harmony&utm_medium=partner-docs)
- [API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=harmony&utm_medium=partner-docs)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=harmony&utm_medium=partner-docs) -->
