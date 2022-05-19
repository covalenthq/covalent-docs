---
title: Covalent Query Token
---

# Covalent Query Token

A critical component of the Covalent Network is CQT. CQT is the native token of the network wherein all settlements are denominated in this currency. CQT's functions can be broadly broken down into the following:

**Staking & Infrastructure**: Operators, who first have to meet the minimum staking requirement to become such, are compensated in CQT for honestly fulfilling their roles (or role), and performing work on the network like validating data requests, indexing blockchain data, and responding to queries. Furthermore, token holders who wish to contribute to securing the network but do not wish to run node infrastructure, can delegate to a Network Operator and earn staking rewards in CQT.

**Governance:** Those who hold CQT and have a vested interest in the network will be able to vote using CQT for on-chain proposals put forward by the community.

**[CQT Economics](https://www.covalenthq.com/token/)**

|Contract|Network|Address|
|---|---|---|
|CQT Contract Address|Ethereum|[0xD417144312DbF50465b1C641d016962017Ef6240](https://etherscan.io/token/0xd417144312dbf50465b1c641d016962017ef6240)|
|CQT Contract Address|Moonbeam|[0x5130ca61bf02618548dfc3fdef50b50b36b11f2b](https://moonscan.io/token/0x5130ca61bf02618548dfc3fdef50b50b36b11f2b)|



## Using your CQT

- [Staking](https://www.covalenthq.com/dashboard/#/stake/single-sided/)

- [Bridge](https://www.covalenthq.com/docs/network/covalent-query-token/bridge/)

- [Governance](https://www.covalenthq.com/docs/network/covalent-query-token/governance/)

## CQT Operating on the Covalent Network

CQT is not a payment token, rather a means of settlement (settlement will take place on MoonBeam). In the future, when an individual makes a call for the API, they will pay in a US denominated stablecoin such as USDC. The contract will then perform a market buy of CQT using this USDC, driving demand for the token. The CQT is then distributed to the wallets of nodes as a reward for answering the API query.

<img src="/static/images/network/cqtnetwork.jpg"></img>

- 1. The application/developer loads their deposit account with stablecoin assets into the network smart contract.
- 2. The application queries the Covalent API.
- 3. A check is made to verify that there are sufficient funds in the deposit account before sending the respective query request to operators.
- 4. The query is sent to the Query operator to fulfill the request.
- 5. The desired data is sent back to the application.
- 6. An entry is made on the Moonbeam ledger regarding the data that is being consumed, and which operator(s) are fulfilling the request and their cost.
- 7. The balances between the network contract, CQT and the work performed are reconciled.
- 8. The USD funds are drawn down from the developer's deposit account and swapped for CQT via a market buy mechanism and settled against a validator's outstanding balance.

The reason for implementing a stablecoin mechanism is that:

- Stablecoins are the most highly adopted tokens in the web3 ecosystem.
- Enterprise customers do not want to hold a token that is susceptible to volatility on their balance sheets.
- It makes measuring the expense of using the Covalent API easier to budget for users.

The greater number of API queries, the greater the demand and buy pressure for CQT that exists on the Covalent Network.

## Audits

<div class="sm:px-6 grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2 mt-8 pb-20 max-w-5xl">
        <a href="/static/audits/quantstamp-cqt-audit-report.pdf" download class="col-span-2 w-full bg-white px-12 mr-4 mb-4 py-4 no-flex md:py-2 hover:bg-covalent-gray-light border flex items-center font-normal text-sm cursor-pointer">
        <svg class="mr-4 -ml-6 w-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.4345 20.6841V2.5L12.5454 20.6841H29.4345Z" stroke="#FF4C8B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.4333 2.5L12.5 20.6841V70.631C12.5 73.1473 14.4011 75.1889 16.7444 75.1889H63.2557C65.5989 75.1889 67.5 73.1473 67.5 70.631V7.05788C67.5 4.54154 65.5989 2.5 63.2557 2.5H29.4333Z" stroke="#FF4C8B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.4958 62.0882H21.9297V65H20V55H23.4958C25.7518 55 26.8798 56.1569 26.8798 58.4706C26.8798 59.6373 26.5908 60.5343 26.0128 61.1618C25.4442 61.7794 24.6052 62.0882 23.4958 62.0882ZM21.9297 60.3529H23.4818C24.442 60.3529 24.9221 59.7255 24.9221 58.4706C24.9221 57.8529 24.8056 57.4118 24.5725 57.1471C24.3395 56.8725 23.9759 56.7353 23.4818 56.7353H21.9297V60.3529Z" fill="#FF4C8B"/>
        <path d="M39.8264 65H36.6242V55H39.8264C40.6468 55 41.3226 55.0931 41.854 55.2794C42.3853 55.4559 42.7955 55.7549 43.0845 56.1765C43.3828 56.5882 43.5879 57.0784 43.6998 57.6471C43.8116 58.2059 43.8676 58.9363 43.8676 59.8382C43.8676 60.7402 43.8163 61.4902 43.7138 62.0882C43.6112 62.6765 43.4154 63.2059 43.1265 63.6765C42.8468 64.1373 42.4366 64.4755 41.8959 64.6912C41.3552 64.8971 40.6654 65 39.8264 65ZM41.854 61.0294C41.8726 60.7157 41.882 60.2843 41.882 59.7353C41.882 59.1765 41.8633 58.7304 41.826 58.3971C41.7887 58.0637 41.7002 57.7598 41.5603 57.4853C41.4205 57.2108 41.2108 57.0245 40.9311 56.9265C40.6607 56.8186 40.2925 56.7647 39.8264 56.7647H38.5539V63.2353H39.8264C40.5256 63.2353 41.0336 63.049 41.3506 62.6765C41.6209 62.3725 41.7887 61.8235 41.854 61.0294Z" fill="#FF4C8B"/>
        <path d="M53.9313 65V55H60V56.7647H55.861V59.7059H59.2449V61.4706H55.861V65H53.9313Z" fill="#FF4C8B"/>
        </svg>
        <div class="">
            View the Quantstamp Report
        </div>
        </a>
        <a href="/static/audits/certik-cqt-audit-report.pdf" download class="col-span-2 w-full bg-white px-12 mr-4 mb-4 py-4 no-flex md:py-2 hover:bg-covalent-gray-light border flex items-center font-normal text-sm cursor-pointer">
        <svg class="mr-4 -ml-6 w-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.4345 20.6841V2.5L12.5454 20.6841H29.4345Z" stroke="#FF4C8B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.4333 2.5L12.5 20.6841V70.631C12.5 73.1473 14.4011 75.1889 16.7444 75.1889H63.2557C65.5989 75.1889 67.5 73.1473 67.5 70.631V7.05788C67.5 4.54154 65.5989 2.5 63.2557 2.5H29.4333Z" stroke="#FF4C8B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.4958 62.0882H21.9297V65H20V55H23.4958C25.7518 55 26.8798 56.1569 26.8798 58.4706C26.8798 59.6373 26.5908 60.5343 26.0128 61.1618C25.4442 61.7794 24.6052 62.0882 23.4958 62.0882ZM21.9297 60.3529H23.4818C24.442 60.3529 24.9221 59.7255 24.9221 58.4706C24.9221 57.8529 24.8056 57.4118 24.5725 57.1471C24.3395 56.8725 23.9759 56.7353 23.4818 56.7353H21.9297V60.3529Z" fill="#FF4C8B"/>
        <path d="M39.8264 65H36.6242V55H39.8264C40.6468 55 41.3226 55.0931 41.854 55.2794C42.3853 55.4559 42.7955 55.7549 43.0845 56.1765C43.3828 56.5882 43.5879 57.0784 43.6998 57.6471C43.8116 58.2059 43.8676 58.9363 43.8676 59.8382C43.8676 60.7402 43.8163 61.4902 43.7138 62.0882C43.6112 62.6765 43.4154 63.2059 43.1265 63.6765C42.8468 64.1373 42.4366 64.4755 41.8959 64.6912C41.3552 64.8971 40.6654 65 39.8264 65ZM41.854 61.0294C41.8726 60.7157 41.882 60.2843 41.882 59.7353C41.882 59.1765 41.8633 58.7304 41.826 58.3971C41.7887 58.0637 41.7002 57.7598 41.5603 57.4853C41.4205 57.2108 41.2108 57.0245 40.9311 56.9265C40.6607 56.8186 40.2925 56.7647 39.8264 56.7647H38.5539V63.2353H39.8264C40.5256 63.2353 41.0336 63.049 41.3506 62.6765C41.6209 62.3725 41.7887 61.8235 41.854 61.0294Z" fill="#FF4C8B"/>
        <path d="M53.9313 65V55H60V56.7647H55.861V59.7059H59.2449V61.4706H55.861V65H53.9313Z" fill="#FF4C8B"/>
        </svg>
        <div class="">
           View the Certik Report
        </div>
        </a>
</div>
