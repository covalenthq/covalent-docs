---
title: Evmos Docs
LinkTitle: evmos-docs
hidden: false
---

{{< partnerDocsTemplate blockchain="evmos" mainnet="9001" testnet="9000" apiReferenceChain="9001" >}}
&nbsp;
# About Covalent
{{< aboutCovalent >}}

<!-- # Markdown Reference -->
<!-- # Introduction

[Covalent](https://www.covalenthq.com/?utm_source=evmos&utm_medium=partner-docs) provides a unified API to bring full transparency and visibility to assets across all blockchains including Evmos Mainnet and Testnet.

To get started, sign up for an [**API Key**](https://www.covalenthq.com/platform/?utm_source=evmos&utm_medium=partner-docs). 

**The Evmos Network does not have any EVM transactions prior to the Block Height `58700` for Mainnet and `738550` for Testnet. Therefore when querying the Evmos chain via the Covalent API, the Evmos Mainnet responses are indexed from block height `58700` to the `latest` Block Height.
The Evmos Testnet state response begins from Block Height `738550` to the `latest` Block Height.**

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](https://www.covalenthq.com/static/images/partner-docs/developer_mode.png) | ![Analyst Mode](https://www.covalenthq.com/static/images/partner-docs/analyst_mode.png)|

The Covalent API is RESTful and offers the following out-of-the-box for *Evmos*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Request volume limit** | None |
| **Request rate limit** | 5 requests per second |
| **Base URL** | https://api.covalenthq.com/v1/|
| **Networks & `chain_id`** | Mainnet - `9001` <br> Testnet - `9000`|
| **Supported Endpoints** | **Class A Universal** <br>- [Balances](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/9001) <br> - [Transactions](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/9001) <br> - [Transfers](https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/9001) <br> - [Token Holders](https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/9001) <br> - [Log Events (Contract Address)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/9001) <br> - [Log Events (Topic Hash)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/9001)

Try the supported endpoints directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=evmos&utm_medium=partner-docs) or use the following code examples. **The JSON response format is the same for all endpoints:**
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
const evmosChainId = '9001'
const demoAddress = '0xA61808Fe40fEb8B3433778BBC2ecECCAA47c8c47'

async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

// Example address request
getWalletBalance(evmosChainId, demoAddress);
```

### Python
```
import requests

API_KEY = 'YOUR API KEY'
base_url = 'https://api.covalenthq.com/v1'
evmos_chain_id = '9001'
demo_address = '0xA61808Fe40fEb8B3433778BBC2ecECCAA47c8c47'

def get_wallet_balance(chain_id, address):
    endpoint = f'/{chain_id}/address/{address}/balances_v2/?key={API_KEY}'
    url = base_url + endpoint
    result = requests.get(url).json()
    data = result["data"]
    print(data)
    return(data)


# Example address request
get_wallet_balance(evmos_chain_id, demo_address)
```

&nbsp;
# Use Cases
{{< usecases >}}

&nbsp;
# Resources
Here are some additional resources to help you get started with the Covalent API:
- [Evmos Network Details](https://www.covalenthq.com/docs/networks/evmos/?utm_source=evmos&utm_medium=partner-docs)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=evmos&utm_medium=partner-docs)
- [Project Showcase](https://www.covalenthq.com/docs/project-showcase/?utm_source=evmos&utm_medium=partner-docs)
- [API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=fantom&utm_medium=partner-docs)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=fantom&utm_medium=partner-docs) -->


