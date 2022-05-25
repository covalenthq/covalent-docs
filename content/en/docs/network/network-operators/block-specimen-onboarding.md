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

{{% code-blocks %}}
```json
  brew install git go redis
```
{{%/ code-blocks %}}


**Debian/Ubuntu**
Install Golang, Git, Redis and direnv

{{% code-blocks %}}
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
{{%/ code-blocks %}}



**Fedora**

{{% code-blocks %}}
```json
  dnf install git golang redis

  dnf install direnv
```
{{%/ code-blocks %}}

**RHEL/CentOS**
{{% code-blocks %}}
```json
  yum install git go-toolset redis

  yum install direnv
```
{{%/ code-blocks %}}

**OpenSUSE/SLES**
{{% code-blocks %}}
```json
zypper addrepo https://download.opensuse.org/repositories/devel:languages:go/openSUSE_Leap_15.3/devel:languages:go.repo
zypper refresh
zypper install git go redis

zypper install direnv
```
{{%/ code-blocks %}}

**bash users - add the following line to your ~/.bashrc**:

`eval "$(direnv hook bash)"`

**zsh users - add the following line to your ~/.zshrc**:

`eval "$(direnv hook zsh)"`

After adding this line do not forget to source your bash / powershell config with the following, by running it in your terminal.

`source ~/.zshrc`

`source ~/.bashrc`

### Run BSP

Clone the [covalenthq/bsp-geth](https://github.com/covalenthq/bsp-geth) repo and checkout the branch that contains the block specimen patch (checking out the repo may take some time).

{{% code-blocks %}}
```json
git clone https://github.com/covalenthq/bsp-geth.git

cd bsp-geth

git checkout main
```
{{%/ code-blocks %}}

Build geth (install go if you don’t have it) and other geth developer tools from the root repo with (if you need all the geth related development tools do a “make all”.

{{% code-blocks %}}
```json
make geth
```
{{%/ code-blocks %}}

Start redis (our streaming service) with the following.

{{% code-blocks %}}
```json
brew services start redis
```
{{%/ code-blocks %}}

***On Linux***

{{% code-blocks %}}
```json
systemctl start redis
```
{{%/ code-blocks %}}

Start redis-cli in a separate terminal so you can see the encoded bsps as they are fed into redis streams.

{{% code-blocks %}}
```json
redis-cli   
```
{{%/ code-blocks %}}

**We are now ready to start accepting stream message into redis locally.**

Go back to  ~/bsp-geth and start geth with the given configuration, here we specify the replication targets (block specimen targets) with redis stream topic key “replication”, in full “syncmode”, exposing the http port for the geth apis are optional. Prior to executing, please replace $PATH_TO_GETH_MAINNET_CHAINDATA with the location of the mainnet snapshot that was downloaded earlier. Everything else remains the same as given below.

{{% code-blocks %}}
```json
./build/bin/geth --mainnet --log.debug --syncmode snap --datadir
$PATH_TO_GETH_MAINNET_CHAINDATA --replication.targets
"redis://localhost:6379/?topic=replication" --replica.result
--replica.specimen --log.folder "./logs/"   
```
{{%/ code-blocks %}}

Each of the bsp flags and their functions are described below -

- --mainnet - lets geth know which network to synchronize with, this can be --ropsten --goerli etc
- --port 0 - will auto-assign a port for geth to talk to other nodes in the network, but this may not work if you are behind a firewall. It would be better to explicitly assign a port and to ensure that port is open to any firewalls.
- --http - enables the json-rpc api over http
- --log.debug - enables a detailed log of the processes geth deals with going back and forth between
- --syncmode full - this flag is used to enable different syncing strategies for geth and a fully sync allows us to execute every block from block 0
- --datadir - specifies a local datadir path for geth (note we use “bsp” as the directory name with the Ethereum directory), this way we don’t overwrite or touch other previously synced geth libraries across other chains
- --replication.targets - this flag lets the bsp know where and how to send the bsp messages (this flag will not function without the usage of either one or both of the flags below, if both are selected a full block-replica is exported
- --replica.result - this flag lets the bsp know if all fields related to the block-result specification need to be exported (if only this flag is selected the exported object is a block-result)
- --replica.specimen -  this flag lets the bsp know if all fields related to the block-specimen specification need to be exported (if only this flag is selected the exported object is a block-specimen)

If your node is syncing, connect to the node’s ipc instance to check how far the node is synced.

{{% code-blocks %}}
```json
./build/bin/geth attach $PATH_TO_GETH_MAINNET_CHAINDATA/geth.ipc
```
{{%/ code-blocks %}}

Once connected wait for the node to reach the highest known block to start creating live block specimens.

{{% code-blocks %}}
```json
Welcome to the Geth JavaScript console!

instance: Geth/v1.10.17-stable-d1a92cb2/darwin-arm64/go1.17.2
at block: 10487792 (Mon Apr 11 2022 14:01:59 GMT-0700 (PDT))
 datadir: /Users/niallyorke/bsp/rinkeby-chain-data-snap
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or type exit
> eth.syncing
{
  currentBlock: 10487906,
  healedBytecodeBytes: 0,
  healedBytecodes: 0,
  healedTrienodeBytes: 0,
  healedTrienodes: 0,
  healingBytecode: 0,
  healingTrienodes: 0,
  highestBlock: 10499433,
  startingBlock: 10486736,
  syncedAccountBytes: 0,
  syncedAccounts: 0,
  syncedBytecodeBytes: 0,
  syncedBytecodes: 0,
  syncedStorage: 0,
  syncedStorageBytes: 0
}
```
{{%/ code-blocks %}}

### Run Agent
