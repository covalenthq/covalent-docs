---
title: Bridge
---

# Bridge your CQT

Covalent has partnered with [Nomad](https://www.nomad.xyz/) to enable the secure bridging of CQT to other networks. Nomad is a novel approach to blockchain interoperability that leverages an optimistic mechanism to increase the security of cross-chain communication.

There are two options available when bridging through the Nomad GUI; Nomad and Connext. While complementary to one another, CQT bridging is only available through Nomad at this time.

For more information on Nomad, please visit its [documentation](https://docs.nomad.xyz/).

## Nomad CQT Domain

One important note is that CQT contract address is different per network. As a result, you will have to import to your wallet the new CQT contract address that is respective to the network you are bridging to. It is recommended that you do this prior to bridging. The CQT contract addresses per chain are listed below:

- CQT on Ethereum: **0xD417144312DbF50465b1C641d016962017Ef6240**
- CQT on Moonbeam: **0x5130ca61bf02618548dfc3fdef50b50b36b11f2b**

## How to Bridge CQT using Nomad

Birding through Nomad is intuitive and easy. Outlined below are the steps involved to bridge CQT to Moonbeam using MetaMask.

First, go to [https://app.nomad.xyz/](https://app.nomad.xyz/) and connect your wallet.

<img src="/static/images/network/bridge/bridge1.jpg"></img>

From here, you need to:

- Select Token: **CQT**
- Select an Origin network: **Ethereum**
    - If your wallet is not connected to Ethereum at this point, you will be prompted to switch to Ethereum by your wallet, MetaMask in this case.
- Select a destination network: **Moonbeam**

At this point, the interface should be similar to the below image. The Gas Fee and time to complete the bridge request are shown. Finally, select how much CQT you wish to bridge and select ‘Next’.

<img class="w-1/2" src="/static/images/network/bridge/bridge2.jpg"></img>

After selecting ‘Next’, you will be shown the below prompt. Make sure Nomad is selected and hit ‘Send’.

<img class="w-1/2" src="/static/images/network/bridge/bridge3.jpg"></img>

### Approve & Send Transaction

Before your CQT can be moved to Moonbeam, if you have not done so before, you will have to approve the Nomad Contract to interact with your CQT. This will incur a gas fee.

Having done so, you will be asked to confirm the transaction.

<img class="w-1/2" src="/static/images/network/bridge/bridge4.jpg"></img>

After approving the transaction, you will be taken to the transaction details page. Here, you will see the estimated time remaining for your transfer to complete. Please save your transaction hash for convenience. If you lose it, you can visit your wallet address on the block explorer of the origin network and find the transaction again.

<img class="w-1/2" src="/static/images/network/bridge/bridge5.jpg"></img>

You can expand the time estimate tab to track your transaction status by clicking the down arrow in the blue box.

<img class="w-1/2" src="/static/images/network/bridge/bridge6.jpg"></img>

(Optional) If you navigated away from the GUI at any point and want to find your transfer's progress page again, visit [https://app.nomad.xyz/tx](https://app.nomad.xyz/tx) and enter the origin network and your transfer's transaction hash.

Once your transfer has been completed, you should see the below thedisplay and your funds will be in the account of your destination address. If your transfer is taking longer than expected, please reach out to the Nomad team on [Discord](https://discord.gg/RurtmJApqm) in the #support channel.

Once the transfer is complete, you will see the below prompt.

<img src="/static/images/network/bridge/bridge7.jpg"></img>

And that's it. You have successfully bridged your CQT to Moonbeam.
