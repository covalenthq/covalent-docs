---
title: Template
featuredImage: ../images/covalent-logo.png
description: This doc list instructions for listing project at covalent
hidden: True
---

# How to List your Project/dApp
 
![Template banner image](./images/covalent-logo.png) 

<< check which covalent image to put here>>

**Disclaimer:** The content is created andd submitted by the interested project. Covalent only reviews the standards. 

&nbsp;
## Process

Following are the minimum requirements that must met for showcasing at Covalent: 
- Fork/clone the repo to your local machine.
- Introduce your project to us by using the [template](./showcase-template.md)..
- When changes are complete, create a PR and submit it here.

&nbsp;
## Getting Started
This guide will help you understand the entire process and getting started.

&nbsp;
### Forking/Cloning the Repo

The main idea is to fork a repository, modify it with your changes, and then submit a PR.

So, as mentioned before, first fork this repository and clone the branch **project-showcase**

```
git clone -b project-showcase https://github.com/covalenthq/covalent-docs.git   
cd covalent-docs
```


&nbsp;
### 1. Choose Category 

Next, choose the category that relates to your project the most. There is a folder per category. If you think we are missing a category, contact us throught any of these channels and we will create a new folder.

[Discord](https://discord.com/invite/fgZPpq69Dd) | [Telegram](https://t.me/CovalentHQ)
&nbsp;
### 2. Copy and Edit Template

The template can be found [here](./showcase-template.md). 

For example, let's say your project is named "moonshot", has image "moonshot.png" and related to DeFi. Then, you would need to copy this file inside the following folder:


```
covalent-docs
|--docs
|--|--content
|--|--|--project-showase
|--|--|--|--dao
|--|--|--|--defi/moonshot.md
|--|--|--|--images/moonshot.png
|--|--|--|--governance
|--|--|--|--nft
|--|--|--|--wallet
|--public
|--resources/_gen
|--s
|--static/static/images
...
```
&nbsp;
### 3.  Submitting PR

When you think you have made all the changes into the template, you can sumbit a pull-request from your forked repo to `developement` branch. **Don't create a PR to master!**
 We will review it with our standards and voila! You will be on the showcase.

**Note**: Some projects that were accepted before we formed a standard so they might not adhere to all the pre-requisites. If you are sumbmitting a PR after (decided a date), you must adhere to standards in the template.
