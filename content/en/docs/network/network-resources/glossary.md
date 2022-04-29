---
title: Glossary
---
## Glossary

### Covalent Network

The Covalent Network represents the progressive decentralization of Covalent toward a community-owned and community-run protocol.

A multi-sided platform designed to eventually be self-sufficient, the Covalent Network works by capturing and indexing blockchain data and storing it across multiple points on the network. Anyone can then access this data instantly through querying the unified Covalent API.

### Network Operators

A collection of network participants who perform various roles in the network in extracting, transforming, tracing, indexing, delegating, governing, providing queries all the while making proofs-of-work done for receiving per block-rewards on a public blockchain.

### Block Specimen Producer

A blockchain client that asynchronously exports rich, cryptographically-secure data as block specimens.

### Indexers

An indexing engine to trace, decode and enrich the block specimens into block results and aggregatable traces.

### Query operators

The subset of operators that host the decentralized database with the indexed blockchain data and a layer to extract insights from contract state snapshots allowing API calls to retrieve it.

### Delegators

The subset of operators that delegate their CQT to stake within a pool of producers, auditors, refiners, indexers, queriers and receive a portion of the rewards of the work done by them proportional to their stake in the roles. They also participate in governance based on their stake in the evolution of functions undertaken by various roles in the network.

### Auditors

The subset of operators from the pool that check the work of producers and prove when asked to - the work done by them on a public EVM chain.

### Block Specimen

The Block Specimen is a bulk export method that can be implemented on existing blockchain clients including Geth and Erigon. These patches are essentially an extract-and-normalize worker that create Block Specimens, which together form a canonical representation of a blockchains full historical state.

### Block Result

A transformed Block Specimen that is organized in a schema the Covalent database expects.

### ProofChain Contract

The ProofChain contract is a smart contract that 1) records information that meet specific validation rules and 2) determines consensus on network rewards by comparing these inputs.

With regard to the information recorded, these are proofs in the form of hashes. A proof is generated for every Block Specimen created by a Block Specimen Producer and submitted to the ProofChain contract, along with some other identifying information.
