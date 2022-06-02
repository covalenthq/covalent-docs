---
title: Onboarding


---
# Block Specimen Producer Onboarding

Before reading any further, please note that only those who have been approved and whitelisted can be fully onboarded as Covalent Network Operators. If you're interested in becoming a Covalent Network Operator, please fill [this](https://covalenthq.typeform.com/to/kzQnxBul) form.

## Prerequisites

### Infra

- Access to an RPC Moonbeam endpoint either locally or via a service provider.
- Generate and document an API token for your storage instance. Supported options include pinata and [web3.storage](https://web3.storage/). The latter is recommended given that it offers up to 1TB in free storage.
- [bsp-geth](https://github.com/covalenthq/bsp-geth) cloned, running and synced.

### General

- Provide Covalent with two public addresses:
  1. **Staking Address**: This is the address of the wallet holding your CQT on Moonbeam to meet the minimum staking requirement.
  2. **Operator Address**: This is a public address tied to the private-public key pair an Operator will use to sign proof transactions to the proof-chain contract. It is required by the bsp-agent. It is not tied to any network. It can be generated using the **BIP-44** mnemonic multi-account deterministic algorithm and using [https://iancoleman.io/bip39/](https://iancoleman.io/bip39/).

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

<img src="/static/images/network/operator-dashboard.png"></img>

Simply hit the ‘Operator Status’ toggle. You will be prompted by MetaMask to confirm the call.

Once confirmed, your ‘Operator Status’ should display as ‘On’.

**Congratulations, you have completed the first step in becoming a Covalent Network Operator. Now on to getting the Block Specimen Producer & Agent up and running.  👩‍💻**

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

```json
eval "$(direnv hook bash)"
```

**zsh users - add the following line to your ~/.zshrc**:

```json
eval "$(direnv hook zsh)"
```

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

Build Geth (install go if you don’t have it) and other Geth developer tools from the root repo with (if you need all the Geth related development tools do a “make all”.

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

***If you're on Linux:***

{{% code-blocks %}}
```json
systemctl start redis
```
{{%/ code-blocks %}}

Start redis-cli in a separate terminal so you can see the encoded block specimens as they are fed into redis streams.

{{% code-blocks %}}
```json
redis-cli   
```
{{%/ code-blocks %}}

**We are now ready to start accepting stream message into redis locally.**

Go back to  ~/bsp-geth and start Geth with the given configuration, here we specify the replication targets (block specimen targets) with redis stream topic key “replication”, in full “syncmode”, exposing the http port for the Geth apis are optional. Prior to executing, please replace $PATH_TO_GETH_MAINNET_CHAINDATA with the location of the mainnet snapshot that was downloaded earlier. Everything else remains the same as given below.

{{% code-blocks %}}
```json
./build/bin/geth --mainnet --log.debug --syncmode snap --datadir
$PATH_TO_GETH_MAINNET_CHAINDATA --replication.targets
"redis://localhost:6379/?topic=replication" --replica.result
--replica.specimen --log.folder "./logs/"   
```
{{%/ code-blocks %}}

Each of the bsp flags and their functions are described below:

- `--mainnet` - lets geth know which network to synchronize with, this can be --ropsten --goerli etc
- `--port` 0 - will auto-assign a port for geth to talk to other nodes in the network, but this may not work if you are behind a firewall. It would be better to explicitly assign a port and to ensure that port is open to any firewalls.
- `--http` - enables the json-rpc api over http
- `--log.debug` - enables a detailed log of the processes geth deals with going back and forth between
- `--syncmode full` - this flag is used to enable different syncing strategies for geth and a fully sync allows us to execute every block from block 0
- `--datadir` - specifies a local datadir path for geth (note we use “bsp” as the directory name with the Ethereum directory), this way we don’t overwrite or touch other previously synced geth libraries across other chains
- `--replication.targets` - this flag lets the bsp know where and how to send the bsp messages (this flag will not function without the usage of either one or both of the flags below, if both are selected a full block-replica is exported
- `--replica.result` - this flag lets the bsp know if all fields related to the block-result specification need to be exported (if only this flag is selected the exported object is a block-result)
- `--replica.specimen` -  this flag lets the bsp know if all fields related to the block-specimen specification need to be exported (if only this flag is selected the exported object is a block-specimen)

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

Now wait until you see a log from the terminal here with something like this

This can take a few days or a few hours depending on if the source chaindata is already available at the datadir location or live sync is being attempted from scratch for a new copy of blockchain data obtained from syncing with peers. In the case of the latter the strength of the network and other factors that affect the Ethereum network devp2p protocol performance can further cause delays.

Once blockchain data state sync is complete and eth.syncing returns false, you can expect to see block-specimens in the redis stream. The following logs are captured from bsp-geth service as the node begins to export live Block Specimens.

{{% code-blocks %}}
```json
INFO [04-11|16:35:48.554|core/chain_replication.go:317]             Replication progress                     sessID=1 queued=1 sent=10960 last=0xffc46213ccd3c55b75f73a0bc29c25780eb37f04c9f2b88179e9d0fb889a4151
INFO [04-11|16:36:04.183|core/blockchain_insert.go:75]              Imported new chain segment               blocks=1       txs=63         mgas=13.147  elapsed=252.747ms    mgasps=52.015   number=10,486,732 hash=8b57c8..bd5c79 dirty=255.49MiB
INFO [04-11|16:36:04.189|core/block_replica.go:41]                  Creating Block Specimen                  Exported block=10,486,732 hash=0x8b57c8606d74972c59c56f7fe672a30ed6546fc8169b6a2504abb633aebd5c79
INFO [04-11|16:36:04.189|core/rawdb/chain_iterator.go:338]          Unindexed transactions                   blocks=1       txs=9          tail=8,136,733 elapsed="369.12µs"
```
{{%/ code-blocks %}}

The last two lines above show that new block replicas containing the block specimens are being produced and streamed to the redis topic “replication”. After this you can check that redis is stacking up the bsp messages through the redis-cli with the command below (this should give you the number of messages from the stream).

{{% code-blocks %}}
```json
$ redis-cli
127.0.0.1:6379>  xlen replication
11696
```
{{%/ code-blocks %}}

If it doesn’t, the Block Specimen Producer isn't producing messages! In this case please look at the logs above and see if you have any WARN / DEBUG logs that can be responsible for the inoperation. For quick development iteration and faster network sync - enable a new node key to quickly re-sync with the ethereum network for development and testing by going to the root of go-ethereum and running the bootnode helper.

NOTE: To use the bootnode binary execute make all in place of make geth, this creates all the additional helper binaries that bsp-geth ships with
`./build/bin/bootnode -genkey ~/.ethereum/bsp/geth/nodekey`.
Furthermore, you can also have bsp-agent running alongside consuming messages from redis (this will consume the messages and remove them from the stream key). You should see the occasional responses from bsp-agent service such as:

{{% code-blocks %}}
```json
time="2022-04-18T17:26:47Z" level=info msg="Initializing Consumer: fb78bb1c-1e14-4905-bb1f-0ea96de8d8b5 | Redis Stream: replication-1 | Consumer Group: replicate-1" function=main line=167
time="2022-04-18T17:26:47Z" level=info msg="block-specimen not created for: 10430548, base block number divisor is :3" function=processStream line=332
time="2022-04-18T17:26:47Z" level=info msg="stream ids acked and trimmed: [1648848491276-0], for stream key: replication-1, with current length: 11700" function=processStream line=339
time="2022-04-18T17:26:47Z" level=info msg="block-specimen not created for: 10430549, base block number divisor is :3" function=processStream line=332
time="2022-04-18T17:26:47Z" level=info msg="stream ids acked and trimmed: [1648848505274-0], for stream key: replication-1, with current length: 11699" function=processStream line=339

---> Processing 4-10430550-replica <---
time="2022-04-18T17:26:47Z" level=info msg="Submitting block-replica segment proof for: 4-10430550-replica" function=EncodeProveAndUploadReplicaSegment line=59
time="2022-04-18T17:26:47Z" level=info msg="binary file should be available: ipfs://QmUQ4XYJv9syrokUfUbhvA4bV8ce7w1Q2dF6NoNDfSDqxc" function=EncodeProveAndUploadReplicaSegment line=80
time="2022-04-18T17:27:04Z" level=info msg="Proof-chain tx hash: 0xcc8c487a5db0fec423de62f7ac4ca81c630544aa67c432131cabfa35d9703f37 for block-replica segment: 4-10430550-replica" function=EncodeProveAndUploadReplicaSegment line=86
time="2022-04-18T17:27:04Z" level=info msg="File written successfully to: /scratch/node/block-ethereum/4-10430550-replica-0xcc8c487a5db0fec423de62f7ac4ca81c630544aa67c432131cabfa35d9703f37" function=writeToBinFile line=188
time="2022-04-18T17:27:04Z" level=info msg="car file location: /tmp/28077399.car\n" function=generateCarFile line=133
time="2022-04-18T17:27:08Z" level=info msg="File /tmp/28077399.car successfully uploaded to IPFS with pin: QmUQ4XYJv9syrokUfUbhvA4bV8ce7w1Q2dF6NoNDfSDqxc" function=HandleObjectUploadToIPFS line=102
time="2022-04-18T17:27:08Z" level=info msg="stream ids acked and trimmed: [1648848521276-0], for stream key: replication-1, with current length: 11698" function=processStream line=323
```
{{%/ code-blocks %}}

**If you see all of the above you're successfully running the full BSP pipeline.**

### Run Agent

Next we’re going to install the agent that can transform the specimens to AVRO encoded blocks, prove that their data contains what is encoded and upload them to an object store. Clone the [covalenthq.com/bsp-agent](https://github.com/covalenthq/bsp-agent) repo in a separate terminal.

{{% code-blocks %}}
```json
git clone https://github.com/covalenthq/bsp-agent.git

cd bsp-agent

git checkout v1.1.5
```
{{%/ code-blocks %}}


Add an .envrc file to `~/bsp-agent` and add the private key to your operator account address.

{{% code-blocks %}}
```json
cd bsp-agent

touch .envrc
```
{{%/ code-blocks %}}

Here we set up the required env vars for the bsp-agent. Other variables that are not secrets are passed as flags. Add the entire line below to the .envrc file with the replaced keys, rpc url and ipfs service token, save the file.

{{% code-blocks %}}
```json
export MB_RPC_URL=***
export MB_PRIVATE_KEY=***
export IPFS_SERVICE_TOKEN=***
```
{{%/ code-blocks %}}

Allow direnv to catch the exported constant and enable it with the direnv allow command: `direnv allow` .

**NOTE:You should see something like this if the env variables have been correctly exported and ready to use. If you don’t see this prompt in the terminal please enable/install direnv using the previous installation instructions.**

{{% code-blocks %}}
```json
direnv: loading ~/Documents/covalent/bsp-agent/.envrc
direnv: export +MB_PRIVATE_KEY +MB_RPC_URL +IPFS_SERVICE_TOKEN
```
{{%/ code-blocks %}}

Make sure that you replace $PROOF_CHAIN_CONTRACT_ADDR with the new copied “proof-chain” contract address in the command below for the `--proof-chain-address` flag and create a bin directory at `~/bsp-agent` to store the block- specimens binary files with `mkdir -p bin/block-ethereum`.

**Moonbeam Proof-Chain Address: 0x4f2E285227D43D9eB52799D0A28299540452446E**

Copy-paste the commands below (with only the new proof chain address changed) and run the agent:

{{% code-blocks %}}
```json
go run ./cmd/bspagent/*.go     
--redis-url="redis://username:@localhost:6379/0?topic=replication#replicate"     
--avro-codec-path="./codec/block-ethereum.avsc"     
--binary-file-path="./bin/block-ethereum" --block-divisor=35       
--proof-chain-address=0x4f2E285227D43D9eB52799D0A28299540452446E     
--consumer-timeout=10000000       --log-folder ./logs/     
--ipfs-service=web3.storage
```
{{%/ code-blocks %}}

Each of the agent’s flags and their functions are described below:

- `--redis-url` - this flag tells the agent where to find the bsp messages, at which stream topic key (replication) and what the consumer group is named with the field after # which in this case is replicate, additionally one can provide a password to the redis instance here but we recommend by adding the line below to the .envrc
export REDIS_PWD=your-redis-pwd
- `--codec-path` - tells the bsp agent the relative path to the AVRO .avsc files in the repo, since the agent ships with the corresponding avsc files this remains fixed for the time being
- `--binary-file-path` - tells the bsp if local copies of the block-replica objects being created are to be stored in a given local directory. Please make sure the path (& directory) pre-exists before passing this flag.
- `--block-divisor` - allows the operator to configure the number of block specimens being created, the block number divisible only by this number will be extracted, packed, encoded, uploaded and proofed.
- `--eth-client` - specifies the ethereum client used to make transactions to on the CQT network, credentials to be able to write it should be provided in the .envrc file
- `--proof-chain-address` - specifies the address of the proof-chain contract that has been deployed to the Moonbeam network.
- `--consumer-timeout` - specifies when the agent stops accepting new msgs from the pending queue for encode, proof and upload.
- `--log-folder` - specifies the location (folder) where the log files have to be placed. In case of error (like permission errors), the logs are not recorded in files.
- `--ipfs-service` - specifies the IPFS node as service to be used for block specimen uploads, supported options are pinata and web3.storage. Must provide API token on .envrc (or .env) file.

**NOTE: if the bsp-agent command above fails with a message about permission issues to access  ~/.ipfs/*, run sudo chmod -R 700 ~/.ipfs  and try again.**

If all the cli-flags are administered correctly (either in the makefile or the go run command) you should be able to see something like this from logs.

{{% code-blocks %}}
```json
time="2022-04-18T17:26:47Z" level=info msg="Initializing Consumer: fb78bb1c-1e14-4905-bb1f-0ea96de8d8b5 | Redis Stream: replication-1 | Consumer Group: replicate-1" function=main line=167
time="2022-04-18T17:26:47Z" level=info msg="block-specimen not created for: 10430548, base block number divisor is :3" function=processStream line=332
time="2022-04-18T17:26:47Z" level=info msg="stream ids acked and trimmed: [1648848491276-0], for stream key: replication-1, with current length: 11700" function=processStream line=339
time="2022-04-18T17:26:47Z" level=info msg="block-specimen not created for: 10430549, base block number divisor is :3" function=processStream line=332
time="2022-04-18T17:26:47Z" level=info msg="stream ids acked and trimmed: [1648848505274-0], for stream key: replication-1, with current length: 11699" function=processStream line=339

---> Processing 4-10430550-replica <---
time="2022-04-18T17:26:47Z" level=info msg="Submitting block-replica segment proof for: 4-10430550-replica" function=EncodeProveAndUploadReplicaSegment line=59
time="2022-04-18T17:26:47Z" level=info msg="binary file should be available: ipfs://QmUQ4XYJv9syrokUfUbhvA4bV8ce7w1Q2dF6NoNDfSDqxc" function=EncodeProveAndUploadReplicaSegment line=80
time="2022-04-18T17:27:04Z" level=info msg="Proof-chain tx hash: 0xcc8c487a5db0fec423de62f7ac4ca81c630544aa67c432131cabfa35d9703f37 for block-replica segment: 4-10430550-replica" function=EncodeProveAndUploadReplicaSegment line=86
time="2022-04-18T17:27:04Z" level=info msg="File written successfully to: /scratch/node/block-ethereum/4-10430550-replica-0xcc8c487a5db0fec423de62f7ac4ca81c630544aa67c432131cabfa35d9703f37" function=writeToBinFile line=188
time="2022-04-18T17:27:04Z" level=info msg="car file location: /tmp/28077399.car\n" function=generateCarFile line=133
time="2022-04-18T17:27:08Z" level=info msg="File /tmp/28077399.car successfully uploaded to IPFS with pin: QmUQ4XYJv9syrokUfUbhvA4bV8ce7w1Q2dF6NoNDfSDqxc" function=HandleObjectUploadToIPFS line=102
time="2022-04-18T17:27:08Z" level=info msg="stream ids acked and trimmed: [1648848521276-0], for stream key: replication-1, with current length: 11698" function=processStream line=323
```
{{%/ code-blocks %}}

If you see the above log, you’re successfully running the entire block specimen producer workflow. The bsp-agent is reading messages from the redis streams topic, encoding, compressing, proving and uploading it to the storage bucket in segments of multiple blocks at a time.

If however, that doesn’t happen and the agent fails and isn’t able to complete the workflow, fear not! It will atomically fail and the messages will be persisted in the stream where they were being read from! So when you restart correctly the same messages will be reprocessed till full success.

Please note any ERR / WARN / DEBUG messages that could be responsible for the failure. The messages should be clear enough to pinpoint the exact issue. Additionally, seek support in the Covalent Discord.

Now finally to decode the binary AVRO encoded block-replica (specimens) from your local storage and pretty print its contents and get to the block data ready to index and trace.

{{% code-blocks %}}
```json
cd bsp-agent/scripts
```
{{%/ code-blocks %}}


{{% code-blocks %}}
```json
go run extractor.go \
--binary-file-path="../bin/block-ethereum/" \
--codec-path="../codec/block-ethereum.avsc" \
--indent-json=0
```
{{%/ code-blocks %}}

Each of the extractor’s flags and their functions are described below -

- `--codec-path` - tells the extractor the relative path to the AVRO .avsc codec files in the repo, since the agent ships with the corresponding avsc files this remains fixed.
- `--binary-file-path` - tells the extractor if copies of the block-replica objects already created are  found in a given local directory. Please make sure the path (& directory) pre-exists with files in them before passing this flag.
- `--indent-json` - tells the extractor how to format the json output, use 1 or 2 for example besides 0.
