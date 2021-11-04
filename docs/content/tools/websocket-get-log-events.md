---
title: WebSocket Connections
order: 3
hidden: false
author: anadipandharkar
description: Learn how to open a WebSocket connection to API endpoints
---


# Subscribe to a WebSocket connection

Currently, we support WebSocket connections to the following endpoints:

1. [Get log events by Contract Address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/address/{address}/)

2. [Get log events by topic hashes](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/topics/{topic}/)

If you would like to request WebSocket support for new endpoints or provide feedback on existing ones, please use our [governance forum](https://gov.covalenthq.com/c/dev/api/14).

The idea of WebSocket support on log event endpoints came about by observing how API users were pinging these endpoints repeatedly in order to watch if an event happened to trigger an action on the client side. In order to optimize our API calls, we are now introducing WebSocket subscriptions on the above two log event endpoints. 

The ideal way to use the WebSocket connection is as a notification service for certain log events. Then a follow-up API call should be made. An example use case is while creating an NFT Marketplace where the application is interested in watching for `mint`, `transfer`, `transferSingle` and various other log events to trigger different type of actions and renders on the client side. Using WebSockets, the application can subscribe to the `mint` event of a specific contract to watch if a new NFT has been created. Once confirmed, the application can call [get external NFT metadata endpoint](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/tokens/{contract_address}/nft_metadata/{token_id}/) to fetch the NFT details.

**The WebSocket connection feature is in beta and should thus be used accordingly.** 


## Code Example
Refer the following code to open up a subscription.

```jsx
let Stomp = require('stompjs');

function successCallback() {
  
    let sub1 = client.subscribe("/v1/1/events/address/0x7be8076f4ea4a4ad08075c2508e481d6c946d12b/", function(message){
         // user can do anything with message.body because it is the log event object returned
        console.log("This is sub1 data: " + message.body)
    });

}
let url = "wss://api.covalenthq.com/v1/";
let client = Stomp.overWS(url);
client.heartbeat.incoming = 0;
client.heartbeat.outgoing = 10000;

let timeout = 5000;
client.connect({}, function (frame) {
    console.log("Connected: " + frame);
    successCallback();

}, function(error) {
    console.log("You disconnected: " + error);
    client.disconnect(function() {
        setTimeout(() => {
            reconnect("wss://api.covalenthq.com/v1/", successCallback);
        },timeout);

    });
});

let mytimeOut;
function reconnect(socketUrl, successCallback) {

    if (client.connected) {
        client.disconnect();
        return;
    }

    clearTimeout(mytimeOut);
    console.log("Trying to reconnect...");
    let connected = false;

    client = Stomp.overWS(socketUrl);
    client.heartbeat.incoming = 0;
    client.heartbeat.outgoing = 10000;
    client.connect({}, (frame) => {
        connected = true;
        successCallback();
        timeout = 5000;
        clearTimeout(mytimeOut);
    }, () => {
        if (connected) {
            setTimeout(() => {
                reconnect(socketUrl, successCallback);
            },timeout);
        }
    });
    if (!client.connected) {
        mytimeOut = setTimeout(() => {
            reconnect(socketUrl, successCallback);
        }, timeout+=1000);
    }

}
```

We would love to get your feedback and improve this feature based on your use case. Please contact one of our product experts **[here](anadi@covalenthq.com)** or use our [governance forum](https://gov.covalenthq.com/c/dev/api/14).
