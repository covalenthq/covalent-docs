---
title: Blockchain Docs
LinkTitle: blockchain-docs
hidden: false
---

<!--
Instructions:
1. Copy the code below into a new md file for the blockchain partner.
2. Replace "blockchain" with the partner name. This should match the slug used for the network page. For example, if the network page is `/networks/etherem/`, then use the blockchain name: "ethereum" (all lowercase).
3. Pass in the corresponding chainIDs for mainnet and testnet. If either are not supported, use "NA".
4. The `apiReferenceChain` is the chainId to use in all the links to the API reference and the code snippets.

The shortcode for the partner docs template can be found in `/shortcodes/partnerDocsTemplate.html`

To provide the HTML or Markdown files to the partner blockchain, one approach is to do the following:
1. Open the rendered partner-docs page in your browser and open the Sources tabe in the Developer Tools.
2. Copy the HTML code starting from the <h1>Introduction</h1> element to the end of the About Covalent section.
3. Use an online HTML to Markdown coverter (https://www.convertsimple.com/convert-html-to-markdown/) to get the markdown copy
4. Test the markdown in your code editor to check it renders correctly.
-->

{{< partnerDocsTemplate blockchain="blockchain" mainnet="1" testnet="42" apiReferenceChain="1" >}}
&nbsp;
# About Covalent
{{< aboutCovalent >}}
