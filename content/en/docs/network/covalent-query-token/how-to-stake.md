---
title: How to Stake CQT
---

# How to Stake CQT on the Covalent Network

The primary way to stake CQT is through the [Covalent Network Staking Dashboard](https://www.covalenthq.com/dashboard/#/stake/single-sided/). Here, you can stake your CQT to a number of Covalent Network Operators. As a reward for doing so, you stand to earn CQT proportionate to how much you have staked.

**Note**: Staking is **live on Moonbeam**. Therefore, to participate in staking on the Covalent Network, you have to bridge your CQT to Moonbeam from the respective network you have CQT on. For more information on how to transfer your CQT to Moonbeam, visit the Bridging guide [here](https://www.covalenthq.com/docs/network/covalent-query-token/bridge/).

## Getting Start with the Covalent Network Dashboard

To get started with the dashboard, navigate to the [Covalent Network Staking Dashboard](https://www.covalenthq.com/dashboard/#/stake/single-sided/). You will be prompted to connect your wallet. If you have not already, you will need to connect to the Moonbeam Network via your wallet. If you need assistance in doing so, visit the Moonbeam documentation on [connecting MetaMask to Moonbeam.](https://docs.moonbeam.network/builders/get-started/moonbeam/#connect-metamask)

On the staking dashboard, you will be able to delegate to network operators, modify existing stakes, and get an overall glimpse of your staking activity.

### Stake your CQT to a Network Operator

Upon connecting your wallet to the [Covalent Network Staking Dashboard](https://www.covalenthq.com/dashboard/#/stake/single-sided/), you, as a Delegator, can delegate to a Network Operator by staking tokens and adding to the Operator's stake.

You should see a number of Network Operators, all of which perform a specific, or range of roles. At this time, they are only operating as Block Specimen Producers.

On the dashboard, you can view the name, operator's staked amount, commission rate, APY, amount of CQT delegated to this operator, and the amount available to delegate.

<IMAGE>

#### Selecting a Network Operator

In selecting a Network Operator, it is important to consider the commission rate and delegation available to stake.

To stake, select an operator, click stake and choose the amount of CQT you wish to delegate.  From there, you have to first approve the contract interacting with your wallet (gas charge) and second, make and confirm the transaction. Once you have completed both of these actions, you have officially staked your CQT.

<image>

When you return to the Staking Dashboard after successfully staking your CQT, you should be able to view your staked position.

<image>

### Topping Up your Staked Amount

To top up your staked amount:

- On the staking dashboard, select the ‘Top Up’ prompt after delegating your CQT.
- Here, you can either:
    - Stake more CQT from your wallet to the Operator. This follows the same process as described above.
    - Or, if you have rewards you wish to claim and stake, you can do so.
- The new staked amount should now be reflected on the dashboard.

### Redeeming your CQT Rewards

Rewards can be redeemed immediately. There is no cooldown period for rewards. To redeem:

- Under 'My Delegators', a tab labelled 'Available to Redeem' is displayed where you can view how much you can redeem. This is the interest you have earned on the staked amount.
- Select 'Redeem', choose how much you wish to redeem, pay the transaction fee and the reward amount is deposited into your wallet. This can be the original wallet you used or a beneficiary address.
- Note, the redeem amount is the **Total Earned minus the Commission Fee** of the operator you have staked with.

### Unstaking your Delegated CQT

There are some points to consider when unstaking your delegated CQT:

- For Delegators, an unstaking period of 28 days exists.
- For Operators, an unstaking period of 6 months exists.
    - As a reminder, the length of both of these figures can be changed by the contract owner.
- **Note that this is different from redeemingRewards. Redeeming rewards involves claiming your interest earned whereas unstaking involves removing a portion or your full amount of staked CQT.**

***Scenario 1: Delegator chooses to unstake themselves***

- Under 'My Delegations', select 'Transfer out'.
- You will be presented with the below prompt. Here you can select how much you wish to undelegate. Then it is a matter of paying the transaction fee.
- Once the transaction has been confirmed, the cooldown period will begin.
<image>
- Once the cooldown period is over, you can transfers you unstaked CQT to your wallet. Another gas fee is charged here.

***Scenario 2: My operator got disabled***

A Network Operator may become disabled for two 2 reasons: 1) They unstake and no longer operate on the network or 2) Misbehave. In both cases:

- You can choose to unstake or simply move the staked amount to another operator.

It is the Delegator's sole responsibility to monitor if the Operator they have delegated their CQT to has been disabled or not.

### Recover your Unstaked Amount

During the cooldown period that follows unstaking your CQT, you can go back and recover the unstaked amount; staking back the unstaked amount to the operator.

That’s it! Now you’ve successfully delegated to a Network Operator, updated the delegation amount, and then removed the delegation. You have all the tools necessary to get started with staking on the Covalent Network!
