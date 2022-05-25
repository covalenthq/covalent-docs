---
title: Onboarding


---
# Block Specimen Producer Onboarding

Before reading any further, please note that only those who have been approved and whitelisted can be fully onboarded as a Covalent Network Operators. If you're interested in becoming a Covalent Network Operator, please fill [this](https://covalenthq.typeform.com/to/kzQnxBul) form.

## Prerequisites

### Infra

- Access to an RPC Moonbeam endpoint either locally or via a service provider.
- Generate and document an API token for your storage instance. Supported options include pinata and web3.storage. The latter is recommended given that it offers up to 1TB in free storage.
- [bsp-geth](https://github.com/covalenthq/bsp-geth) cloned, running and synced.

### General

- Provide Covalent with two public addresses:
  1. **Staking Address**: This is the address of the wallet holding your CQT on Moonbeam to meet the minimum staking requirement.
  2. **Operator Address**: This is a public address tied to the private-public key pair an operator will use to sign proof transactions to the proof-chain contract. It is required by the bsp-agent. It is not tied to any network. It can be generated using the **BIP-44** mnemonic multi-account deterministic algorithm. It can be generated using [https://iancoleman.io/bip39/](https://iancoleman.io/bip39/).

- Provide your desired commission rate.
- 175,000 CQT on Moonbeam. If you have not bridged your CQT to Moonbeam, here is a guide on [how](https://www.covalenthq.com/docs/network/covalent-query-token/bridge/).
- GLMR held in your Operator Address. This is needed in order to send proofs of block specimens to the ProofChain Contract. This costs approximately 5 GLMR per day.

## Stake the Minimum Stake Requirement

In order to be considered a Covalent Network Operator, you must first stake the minimum stake requirement.

#### Get Started on the Covalent Network Staking Dashboard

On the Covalent Network Staking Dashboard, you will be prompted to connect your wallet. Please connect your wallet and select the account that you will be staking with. If you have not connected and switched to the Moonbeam network, you will be prompted to do so.  

Once connected, you should see your respective Name under ‘My Pools’.

#### Approve & Stake

To stake, simply select ‘**Stake’**. You will have to approve the CQT Contract interacting with your address. Note that to approve, you cannot leave the ‘Stake Amount’ field empty.

After approval, you will be able to stake your CQT. This must be at least 175,000 CQT in order to meet the minimum stake requirement.

#### Head to the Operator Dashboard

On the left tab, you should see an icon labelled Operator Dashboard.

Here, you should see that you are ‘Sufficiently Staked ✓’ and have a ‘Validator Status’ of ‘Disabled’.

Simply hit the ‘Operator Status’ toggle. You will be prompted by MetaMask to confirm the call.

Once confirmed, your ‘Operator Status’ should display as ‘On’.

**Congratulations, you have completed the first step in becoming a Covalent Network Operator. Now on to getting the Block Specimen Product & Agent up and running.  👩‍💻**

## Build & Run the Block Specimen Producer (BSP) & Agent from Source

### Install

- Git is used as the source code version control manager across all our repositories.
- Go is the programming language that is used to develop on go-ethereum and bsp patches, the agent given below is also entirely written in Go.
- Redis is our in-memory database, cache and streaming service provider.
- Direnv is used for secret management and control.


**MacOS 12.x (M1/Intel)**

```json
  brew install git go redis
```


**Debian/Ubuntu**
Install Golang, Git, Redis and direnv

```json
wget https://golang.org/dl/go1.18.linux-amd64.tar.gz
tar -xvf go1.18.linux-amd64.tar.gz
sudo mv go /usr/local

echo "" >> ~/.bashrc
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export GOROOT=/usr/local/go' >> ~/.bashrc
echo 'export GOBIN=$GOPATH/bin' >> ~/.bashrc
echo 'export PATH=$PATH:/usr/local/go/bin:$GOBIN' >> ~/.bashrc
echo 'export GO111MODULE=on' >> ~/.bashrc
source .bashrc

apt install git redis-server

apt install direnv
```

**Fedora**

```json
  dnf install git golang redis

  dnf install direnv
```

**RHEL/CentOS**

```json
  yum install git go-toolset redis

  yum install direnv
```

**OpenSUSE/SLES**

```json
zypper addrepo https://download.opensuse.org/repositories/devel:languages:go/openSUSE_Leap_15.3/devel:languages:go.repo
zypper refresh
zypper install git go redis

zypper install direnv
```

**bash users - add the following line to your ~/.bashrc**

`eval "$(direnv hook bash)"`

**zsh users - add the following line to your ~/.zshrc**

`eval "$(direnv hook zsh)"`

After adding this line do not forget to source your bash / powershell config with the following, by running it in your terminal

`source ~/.zshrc`

`source ~/.bashrc`

### Run BSP

Clone the [covalenthq/bsp-geth](https://github.com/covalenthq/bsp-geth) repo and checkout the branch that contains the block specimen patch (checking out the repo may take some time)

```json
git clone https://github.com/covalenthq/bsp-geth.git

cd bsp-geth

git checkout main
```

Build geth (install go if you don’t have it) and other geth developer tools from the root repo with (if you need all the geth related development tools do a “make all”.

```json
make geth
```

Start redis (our streaming service) with the following.

```json
brew services start redis
```



### Run Agent
