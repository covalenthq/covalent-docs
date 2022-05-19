---
title: Operator FAQ
---

# Operator FAQ

### 1. Are there staking requirements to become an Operator in the Covalent Network?

A proper incentive structure must be in place for any decentralized structure to succeed. This is especially important in the enforcement of good behavior on the network. Thus, there is a minimum staking requirement (MSR) of 175,000 CQT that each Operator must stake.

Staking assets are used as collateral to register operators in the consensus process. This means that while assets are staked, they are held in an escrow on the network. Consequently, staked assets are inaccessible to the token holder while they are being used to secure the network

### 2. What is the process to become an Operator in the Covalent Network?

Please fill out this [form](https://covalenthq.typeform.com/to/kzQnxBul). Also, you can reach out to the core team in Covalent's community Discord for more information.

### 3. How are Covalent Network improvement proposals addressed?

Anybody can generate and submit improvement proposals. While discourse is the primary tool at this moment to discuss the governance of Covalent, on-chain votes will happen on Snapshot.

If a proposal has passed, it will be reviewed by the core Covalent Engineering team and implemented. Overtime, it is expected that as the Covalent becomes more open source, changes will be implemented by community stewards.

More information can be found [here](https://www.covalenthq.com/docs/network/covalent-query-token/governance/).

### 4. GLMR is the native token of Moonbeam and is used to pay for gas. Where should I store my GLMR for paying for the transaction cost of messaging the ProofChain Contract?

 In the Operator address.

### 5. Is there any unbonding or undelegation period for Operators?

There is an undelegation period of 6 months for operators of the Covalent Network. Rewards can be redeemed immediately, however.  

### 6. Is the Minimum Staking Requirement expected to decrease over time?

Yes. As the Covalent Network is developed and more operators are live and functioning, the MSR will steadily decrease.

### 7. What are the hardware and software requirements for being an Operator?

The initial set of Network Operators of the Covalent Network is operating as Block Specimen Producers which involves running a full Ethereum mainnet archive node with a Covalent extract and normalize worker sitting on top.

Running a block specimen producer node is very input/output (I/O) intensive.  Here, the requirements to run a BSP node matches that of running go-ethereum full node with some additional provisions.

**Hardware Requirements**

The recommended configurations will make sure the sync is not lag prone and the node is able to keep up with the Ethereum network.

Minimum Requirements:

- CPU with 2+ cores
- 4GB RAM
- 320GB free storage space to sync the Mainnet
- 8 MBit/sec download Internet service

Recommended:

- Fast CPU with 4+ cores (e.g. Intel Core i7-4770)
- 32 GB+ RAM
- Fast SSD with >= 500GB storage space
- 25+ MBit/sec download Internet service

**Software Requirements:**

Install the given versions of the following software:

- 64-bit Linux, Mac OS
- SSL certificates
- Git
- BSP v1.1.5 ships with geth Version: 1.10.17 stable
- Go v1.16.4
- Redis v7, Redis-cli 6.2.5
- Listener TCP and UDP discovery port 30303
- ICMP IPv4 should not be closed by an external firewall

### 8. What is the Max Cap Multiplier and why is it in effect?

Max Cap  Multiplier is the ratio of Operator-staked tokens to delegator-staked tokens. For example, with a ratio of 1:10, if a Network Operator stakes 1 CQT, they are only eligible to accept 10 delegated CQT.

This is a mechanism to prevent a centralized group of Operators where the majority of delegated CQT is staked with a select few.

### 9. Will Slashing exist on the Covalent Network?

Slashing will exist on the Covalent Network eventually. Initially, however, there is no slashing. For those who are deemed to be acting dishonestly following the auditing process, rewards will not be distributed.

Slashing updates will be provided well in advance of the functionality being implemented.

### 10. Why do Operators have to publish proofs of production to Moonbeam?

Proofs are created to ensure that the work the operator has produced is honest and valid. The contract in which operators are submitting these proofs is deployed on MoonBeam given the low settlement costs for doing so. If this contract was deployed on Ethereum, the gas costs would be substantial.
