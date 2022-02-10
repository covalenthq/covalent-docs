---
title: Fantom Docs
LinkTitle: fantom-docs
weight: 1
hidden: false
partner: 'fantom'
network: 
    -
        chainId: 250
        name: Mainnet
    -
        chainId: 4002
        name: Testnet
---

# Introduction



<!-- [Covalent](https://www.covalenthq.com/?utm_source=fantom&utm_medium=docs) provides a unified API to bring full transparency and visibility to assets across all blockchain networks including Fantom's Mainnet and Testnet. -->

<p>
    <span>{{< partner-template type="link" link=`https://www.covalenthq.com/?utm_source=` a="Covalent" >}}</span>
    provides a unified API to bring full transparency and visibility to assets across all blockchain networks including {{< partner-template type="partner" >}} Mainnet and Testnet.
</p>

<p>
    To get started, sign up for an
    <span>{{< partner-template type="link" link=`https://www.covalenthq.com/platform/?utm_source=` a="API Key">}}</span>
</p>

<!-- To get started, sign up for an [**API Key**](https://www.covalenthq.com/platform/?utm_source=fantom&utm_medium=docs).  -->

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](../images/developer_mode.jpg) | ![Analyst Mode](../images/analyst_mode.jpg)|

The Covalent API is RESTful and offers the following out-of-the-box for {{< partner-template type="partner" >}}:

<!-- | **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Call volume limit** | None |
| **Concurrent requests limit** | 20 per second |
| **Base URL** | https://api.covalenthq.com/v1/|
| **Networks & `chain_id`** | Mainnet - `250` <br> Testnet - `4002`|
| **Supported Endpoints** | **Class A Universal** <br>- [Balances](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-balances-for-address/lng=en) <br> - [Transactions](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-transactions-for-address/lng=en) <br> - [Transfers](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-a-block/lng=en) <br> - [Token Holders](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-holders-as-of-any-block-height/lng=en) <br> - [Log Events (Contract Address)](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-contract-address/lng=en) <br> - [Log Events (Topic Hash)](https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-topic-hash%28es%29/lng=en) -->

<table>
    <thead>
        <th>Covalent API</th>
        <th></th>
        <th></th>
    </thead>
    <tr>
        <td><b>Response formats</b></td>
        <td>JSON and CSV</td>
    </tr>
        <tr>
        <td><b>Batch response</b></td>
        <td>30 minutes</td>
    </tr>
        <tr>
        <td><b>Call volume limit</b></td>
        <td>None</td>
    </tr>
        <tr>
        <td><b>Concurrent requests limit</b></td>
        <td>20 per second</td>
    </tr>
        <tr>
        <td><b>Base URL</b></td>
        <td>https://api.covalenthq.com/v1/</td>
    </tr>
        <tr>
        <td><b>Networks & <span><code>chain_id</code></span></b></td>
        <td>{{< partner-template type="network" >}}</td>
    </tr>
        <tr>
        <td><b>Supported Endpoints</b></td>
        <td>
            <b>Class A Universal</b><br>
            <span>- <a href="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-balances-for-address/lng=en">Balances</a></span><br>
            <span>- <a href="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-transactions-for-address/lng=en">Transactions</a></span><br>
            <span>- <a href="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-a-block/lng=en">Transfers</a></span><br>
            <span>- <a href="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-token-holders-as-of-any-block-height/lng=en">Token Holders</a></span><br>
            <span>- <a href="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-contract-address/lng=en">Log Events (Contract Address)</a></span><br>
            <span>- <a href="https://www.covalenthq.com/docs/api/#/0/Class-A/Get-log-events-by-topic-hash%28es%29/lng=en">Log Events (Topic Hash)</a></span>
        </td>
    </tr>
</table>
<!-- 
Try the supported endpoints directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=fantom&utm_medium=docs) or use the following code examples. **The JSON response format is the same for all endpoints:** -->

<p>
    Try the supported endpoints directly in your browser from our
    <span>{{< partner-template type="link" link=`https://covalenthq.com/docs/api/?utm_source=` a="API Reference" >}}</span>
    or use the following code examples.
    <b>The JSON response format is the same for all endpoints:</b>
</p>

```json
❴ 
    "data": ..., 
    "error": false,
    "error_message": null,
    "error_code": null
❵
```

### Curl
```json
curl -X GET "https://api.covalenthq.com/v1/{chain_id}/address/{address}/balances_v2/?key={YOUR API KEY}" -H "Accept: application/json"
```

### JavaScript
```javascript
const APIKEY = 'YOUR API KEY';
const baseURL = 'https://api.covalenthq.com/v1'
const partnerChainId = '250'
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
getWalletBalance(partnerChainId, demoAddress);
```

### Python
```python
import requests

API_KEY = 'YOUR API KEY'
base_url = 'https://api.covalenthq.com/v1'
partner_chain_id = '250'
demo_address = '0xFEC4f9D5B322Aa834056E85946A32c35A3f5aDD8'

def get_wallet_balance(chain_id, address):
    endpoint = f'/{chain_id}/address/{address}/balances_v2/?key={API_KEY}'
    url = base_url + endpoint
    result = requests.get(url).json()
    data = result["data"]
    print(data)
    return(data)


# Example address request
get_wallet_balance(partner_chain_id, demo_address)
```

&nbsp;
# Use Cases
The Covalent API supports a broad range of Web3 data use cases including:

| | | | |
| :-----------: | :-----------: | :-----------: | :-----------: |
| ![Gaming](../images/gaming.png) | ![DeFi](../images/defi.png) | ![KYC](../images/kyc.png)| ![NFT](../images/nft_icon.png)|
| Gaming| DeFi Taxes | KYC | NFTs |
| ![Wallets](../images/wallets.png) | ![Dashboards](../images/dashboards.png) | ![On-Chain Forensics](../images/forensics.png)| ![DAO](../images/dao.png)|
| Wallets| Dashboards | On-Chain Forensics | DAO Data |
| ![Trading](../images/trading.png) | ![Predictions](../images/predictions.png) | ![Governance](../images/governance.png)| ![Pricing](../images/pricing.png)|
| DEXs & Trading| Predictive Analytics| Governance | Pricing |

<!-- 
Check out our collection of ready-to-ship [**Code Templates**](https://covalenthq.notion.site/dbf062042f4a463a950f0047b9df9ec1?v=2f7a0d7267034526a641ce7215dd7512/?utm_source=fantom&utm_medium=docs) you can use immediately to build Web3 data-powered dApps. -->

<p>
    Check out our collection of ready-to-ship
    <span>{{< partner-template type="link" link=`https://covalenthq.notion.site/dbf062042f4a463a950f0047b9df9ec1?v=2f7a0d7267034526a641ce7215dd7512/?utm_source=` a="Code Templates" >}}</span>
    you can use immediately to build Web3 data-powered dApps.
</p>

&nbsp;
# Resources
<!-- Here are some additional resources to help you get started with the Covalent API:
- [Fantom Network Details](https://www.covalenthq.com/docs/networks/fantom/?utm_source=fantom&utm_medium=docs)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=fantom&utm_medium=docs)
- [Project Showcase](https://www.covalenthq.com/docs/project-showcase/?utm_source=fantom&utm_medium=docs)
- [Knowledge Base](https://www.covalenthq.com/docs/?utm_source=fantom&utm_medium=docs)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=fantom&utm_medium=docs) -->

Here are some additional resources to help you get started with the Covalent API:
<ul>
    <li>
        {{< partner-template type="link" link=`https://www.covalenthq.com/docs/networks/fantom/?utm_source=` a="Fantom Network Details" >}}
    </li>
    <li>
        {{< partner-template type="link" link=`https://covalenthq.com/docs/api/?utm_source=` a="Covalent API Reference" >}}
    </li>
    <li>
        {{< partner-template type="link" link=`https://www.covalenthq.com/docs/project-showcase/?utm_source=` a="Project Showcase" >}}
    </li>
    <li>
        {{< partner-template type="link" link=`https://www.covalenthq.com/docs/?utm_source=` a="Knowledge Base" >}}
    </li>
    <li>
        {{< partner-template type="link" link=`https://www.covalenthq.com/discord/?utm_source=t` a="Discord Support" >}}
    </li>
</ul>

&nbsp;
# About Covalent
Covalent provides the industry-leading Unified API bringing visibility to billions of Web3 data points. Developers use Covalent to build exciting multi-chain applications like crypto wallets, NFT galleries, and investor dashboard tools utilizing data from most major blockchains. Covalent is trusted by a community of 15,000+ developers and powers data for hundreds of applications including 0x, Zerion, Rainbow Wallet, Rotki, Bitski and others.

<!-- [Website](https://www.covalenthq.com/?utm_source=fantom&utm_medium=docs) | [Discord](https://covalenthq.com/discord/?utm_source=fantom&utm_medium=docs) | [Telegram](https://t.me/CovalentHQ) | [Twitter](https://twitter.com/covalent_hq) | [YouTube](https://www.youtube.com/channel/UCGn-T9qPiXAx490Wr6WPbOw/?utm_source=fantom&utm_medium=docs) | [WeChat](https://mp.weixin.qq.com/s?__biz=MzU0MzY5ODMzMg==&mid=2247483899&idx=1&sn=9c1d4df3acc04bc35c429b244307d3c7&chksm=fb063d08cc71b41e2da96b4747513acf2ab9182babe57c135e4a7d1fef9255eb3b310217835c&token=2144505038&lang=zh_CN#rd) -->


 {{< partner-template type="link" link=`https://www.covalenthq.com/?utm_source=` a="Website" >}} | {{< partner-template type="link" link=`https://covalenthq.com/discord/?utm_source=` a="Discord" >}} | <a href="https://t.me/CovalentHQ">Telegram</a> | <a href="https://twitter.com/covalent_hq">Twitter</a> | {{< partner-template type="link" link=`https://www.youtube.com/channel/UCGn-T9qPiXAx490Wr6WPbOw/?utm_source=` a="Youtube" >}} |  <a href="https://mp.weixin.qq.com/s?__biz=MzU0MzY5ODMzMg==&mid=2247483899&idx=1&sn=9c1d4df3acc04bc35c429b244307d3c7&chksm=fb063d08cc71b41e2da96b4747513acf2ab9182babe57c135e4a7d1fef9255eb3b310217835c&token=2144505038&lang=zh_CN#rd">WeChat</a>

