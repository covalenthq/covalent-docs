---
title: Covalent Network Overview
---

# Covalent Network Overview

The Covalent Network serves as the universal data model for multi-chain indexing and querying.

<img src="/static/images/network/network.png"></img>

The Covalent Network represents the progressive decentralization of Covalent toward a community-owned and community-run protocol.

The Covalent Network will have the following capabilities:

- 1. Big data tools compatible
- 2. Multi-chain compatible
- 3. Storage efficient
- 4. Network efficient
- 5. Low resource intense to run on commercial / retail infra

## Network Operators
{{< network-validators >}}


## Built for Modularity and Extensibility

A multi-sided platform designed to eventually be self-sufficient, the Covalent Network works by capturing and indexing blockchain data and storing it across multiple points on the network. Anyone can then access this data instantly through querying the unified Covalent API.

The supply side consists of both blockchains and the network operators. Both play a critical role in the Covalent Network. For one, blockchains are the source of the data the network is interested in. The more blockchains that the Covalent Network indexes, the more data that flows through it. Meanwhile, network operators, who can assume one or multiple roles in the network, are the workers in this process; from extracting granular and historical blockchain data, to refining and indexing it and all the way to returning API queries on the indexed data.

The demand side consists of protocols, developers, analysts and everyone in between who uses the unified Covalent API to power a plethora of use cases. The greater number of API queries, the greater demand that exists on the Covalent Network.

There are other stakeholders involved beyond blockchains, network operators and API users. There are the delegators; those who wish to secure the Covalent Network by delegating their CQT to a network operator. And then there are those who vote on Covalent Network Improvement Proposals via the governance forum. Together all the roles work in tandem to bring multi-chain data utilities and services to anyone who participates in the Covalent Network.



## Network Operator Roles

  <div class="grid-page-area-wide sm:px-6 max-w-5xl my-12">
    <div class="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-20">
      <div class="max-w-md">
        <div class="flex justify-center">
          <img src="/static/images/network/roles/bsp.png">
        </div>        
        <div class="text-xl mb-2 text-covalent-pink text-center">
          Block Specimen Producers
        </div>
        <div class="text-sm my-2 text-black text-center">
         Technical
        </div>
        <div class="text-md text-black text-center">
          A blockchain client that asynchronously exports rich, cryptographically-secure data as block specimens.
        </div>
      </div>
       <div class="max-w-md">
        <div class="flex justify-center">
          <img src="/static/images/network/roles/indexer.png">
        </div>
        <div class="text-xl mb-2 text-covalent-pink text-center">
          Indexing Nodes<br/>&nbsp;
        </div>
        <div class="text-sm my-2 text-black text-center">
         Technical
        </div>
        <div class="text-md text-black text-center">
           An indexing engine to trace, decode and enrich the block specimens into aggregatable traces.
        </div>
      </div>
        <div class="max-w-sm">
        <div class="flex justify-center">
          <img src="/static/images/network/roles/query-op.png">
        </div>
        <div class="text-xl mb-2 text-covalent-pink text-center">
          Query Nodes<br/>&nbsp;
        </div>
        <div class="text-sm my-2 text-black text-center">
         Technical
        </div>
        <div class="text-md text-black text-center">
          Compute nodes that serve up the Covalent Unified API to developers requesting blockchain data.
        </div>
      </div>
        <div class="max-w-md">
        <div class="flex justify-center">
          <img src="/static/images/network/roles/delegator.png">
        </div>
        <div class="text-xl mb-2 text-covalent-pink text-center">
          Delegators<br/>&nbsp;
        </div>
        <div class="text-sm my-2 text-black text-center">
         Non-Technical
        </div>
        <div class="text-md text-black text-center">
          Token holders who outsource the responsibility of running infrastructure to others.
        </div>
      </div>
   </div>


## CQT Scan
Check out data being pulled in realtime to the Covalent database


<a class="text-white tracking-wide text-lg font-light md:text-sm covalent-button-pink lg:px-4 lg:pb-2 lg:pt-2 md:px-4 md:pb-2 md:pt-2"
href="https://cqtscan.com/#/">CQT SCAN</a>

## Latest Updates
{{< updateTimeline type="network" >}}

## Questions?
Join the Covalent community [Discord server](www.covalenthq.com/discord)
