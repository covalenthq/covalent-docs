---
title: Staking
---

# Covalent Network Staking

Staking on the Covalent Network provides the opportunity to power the querying and indexing protocol of Web 3.

<a class="text-white tracking-wide text-lg font-light md:text-sm covalent-button-pink lg:px-4 lg:pb-2 lg:pt-2 md:px-4 md:pb-2 md:pt-2"
href="https://www.covalenthq.com/dashboard/#/stake/single-sided/">Stake CQT</a>

Staking is an essential feature of the Covalent Network. All Network Operators will have to meet the minimum staking requirement. This mechanism is in place to **promote and ensure correct behaviour in the Covalent Network**. If Network Operators are ever malicious or dishonest, a percentage of their staked amount will be slashed. Furthermore, Network Operators stand to earn more CQT by providing utility to the network.

Beyond Network Operators, CQT holders who do not wish to run a node on the Covalent Network can delegate their tokens to Network Operators. They stand to earn yield for securing the querying and indexing protocol of Web 3.

To manage staking-related actions, you can visit Covalent Network Staking here or below. To learn how to stake on the Covalent Network, you can check out the “How to Stake on the Covalent Network” guide.

There are some further points to note with regard to delegating:

- Staking is live on Moonbeam with bridging facilitated by Nomad.
- **Delegating is non-custodial** - While CQT is held in the staking contract, it is only the owner of the respective staked CQT that can interact with it.
- Staked CQT is held in escrow on the network.. Consequently, staked assets are inaccessible to the token holder while they are being used to secure the network. In order to reverse this, the delegator must unstake the principle amount of CQT they staked.


## Guides and Resources

- [Covalent Network Staking Dashboard](https://www.covalenthq.com/dashboard/#/stake/single-sided/)

- [How to Stake on the Covalent Network](https://www.covalenthq.com/docs/network/covalent-query-token/how-to-stake/)

- [Delegator FAQ](https://www.covalenthq.com/docs/network/network-resources/delegator-faq)

- [Bridging your CQT](https://www.covalenthq.com/docs/network/covalent-query-token/bridge/)

## General Definitions

Some important parameters to understand with regards to Covalent Network staking:

- **Network** **Operators**: A collection of network participants who perform various roles in the network including extracting, transforming, tracing, indexing, delegating, governing, and answering queries. Network Operators submit proofs-of-work done and receive per block-rewards on a public blockchain for honest work.
- **Commission Fee**: The rate each network operator charges for delegating with them
- **Epoch**: An epoch with regard to the Covalent Network is the period of time a Block Specimen session lasts. At the moment, an epoch lasts 24 hours. Epochs are considered in determining network reward.
- **Emission rates**: The amount of CQT that is rewarded per epoch.
- **MaxCap Multiplier**: MaxCap Multiplier is the ratio of network operator staked tokens to delegator staked tokens. For example, with a ratio of 1:10, if a Network Operator stakes 1 CQT, they are only eligible to accept 10 delegated CQT.
- **Operator Max Stake:** This is an upper bound set by the contract owner that limits how much an operator can stake. This is in place to prevent a minority of the operators making up a signification percentage of the staked amount.
- **Deposit reward tokens**: Sourced from the ‘Staking’ allocation of CQTs total supply, these are deposited tokens that are stored in the staking contract and distributed as rewards.
- **Remove reward tokens**: This involves the contract owner removing tokens that have been deposited for rewards. Note, only those that haven't been awarded can be removed.
- **Cooldown period**: The period between when a Delegator or Validators chooses to unstake  and when they can claim back their principal amount.
- **Minimum stake required**: The minimum amount that needs to be staked in order to become a network operator. There is no minimum amount for a delegator.
- **Slashing:** a mechanism to discourage operator misbehaviour, where typically the operator and their delegators get slashed by losing a percentage of their stake. Currently, there is no slashing on the Covalent Network. Until slashing is live, network operators who produce Block Specimens with invalid proofs won't receive rewards.

## Staking Parameters

With Covalent Network Staking, there are a number of staking parameters in place that are dynamic and can be updated. These are in place to a) prevent a small number of Network Operators making up the majority staked and b) to manage the system as its scale increases. These parameters will be periodically examined and adjusted. The parameters at launch are as follows:

|Parameter|Rate|
|---|---|
|Operator Max Stake|175,000 CQT|
|MaxCap Multiplier|3:1|
|Minimum Stake Requirement|175,000 CQT|

## Reward Distribution

The initial staking yield and network rewards are supplied through the Staking allocation (view [here](https://www.covalenthq.com/token/)) and this will be used to supplement network rewards for up to 4 years.

As time elapses, the staking contract will emit rewards based on a rate determined by the smart contract such that the network operations remains profitable. The reward emission rate is denominated in CQT per epoch (24 hours) which means the staking yield will change as the staked CQT changes. The CQT emission will be monitored and updated by the contract owner (Covalent) as the quantity of staked CQT grows such that a reasonable staking yield is maintained.

**How are staking rewards determined?**

The APR determines how much CQT is available for each epoch (24 hours). This is represented as `token_emission`. As mentioned, this amount is supplied through the staking allocation.

As a reminder, the work being completed on the network is the production of Block Specimens. In the long run, the price for this good will be determined by the free market; Query Operators being the primary purchaser. However, until then, Covalent will be the only buyer of the Block Specimen and therefore, setting the price a Block Specimen is worth.

To determine the price of a Block Specimen, the number of Block Specimen Produced, as well as the number of BSPs, is considered. Given that for every block mined on Ethereum Mainnet, a respective Block Specimen will be produced. This comes to roughly **5,600** block specimens being produced each day / per epoch.   

Knowing this figure, along with the `token_emission`, we can price the Block Specimen; `block_specimen_price`

This amount will then be divided among network operators who have 1) produced a block specimen and 2) will be proportionate to how much they have staked on the Covalent Network. The total staked amount, which included delegates, is considered here.    

To illustrate, let's say `block_specimen_price` per Block Specimen equals 11 CQT given an APR of 50%. The total staked is 40,000,000 CQT. 10% of this is made up of operator-staked amounts, the remainder coming from delegates. Given the above, operators would be rewarded 1 CQT per Block Specimen produced and 5,601 over the course of the epoch. Meanwhile, Delegates would receive 10 CQT per Block Specimen produced and 56,011 over the course of the epoch.

These epoch amounts are represented as `bsp_reward_per_epoch`. How much each operator and delegate receive of this is proportionate to how much they have staked.

# Contract Addresses

|Contract|Network|Address|
|---|---|---|
|CQT Contract Address|Ethereum|[0xD417144312DbF50465b1C641d016962017Ef6240](https://etherscan.io/token/0xd417144312dbf50465b1c641d016962017ef6240)|
|CQT Contract Address|Moonbeam|[0x5130ca61bf02618548dfc3fdef50b50b36b11f2b](https://moonscan.io/token/0x5130ca61bf02618548dfc3fdef50b50b36b11f2b)|
|CQT Staking Contract Address|Moonbeam|[0x8eBbA081291B908096D19f6614Df041C95fc4469](https://moonscan.io/address/0x8eBbA081291B908096D19f6614Df041C95fc4469)|
|ProofChain Contract|Moonbeam|[0x4f2E285227D43D9eB52799D0A28299540452446E](https://moonscan.io/address/0x4f2E285227D43D9eB52799D0A28299540452446E)|
