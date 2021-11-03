---
title: Websocket connection 
order: 3
hidden: false
author: anadipandharkar
description: Learn how to open a websocket connection to endpoints
---


# How to subscribe to websocket connection

We support below mentioned endpoint currently. If you want to raise websocket support on new one or give feedback on this one, please use our [governance forum](https://gov.covalenthq.com/c/dev/api/14).



## 1. [Get log events by Contract Address](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/address/{address}/)

## 2. [Get log events by topic hashes](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/events/topics/{topic}/)


The idea of websocket support on log-events endpoints originated when we observed a pattern across our users api-requests. Users were pinging log-events endpoint constantly in order to watch if an event has happened to trigger some action on the client side. In order to optimize the usage of our api calls, we introduced websocket subscription on the two log-events endpoints. 

The idea way to use the websocket connection would be to use it as a notification service to watch if certain log-event occur then you call the API that you are concerned with. 
At present, it works better with get_log_events_by_contract_address than get_log_events_by_topic_hash. Currently open for Beta testing, we would be happy to directly engage to get user requirements. We can improve it according to a devloper's needs and requirements around the use case that you are building. 


An example use case can be creating an NFT Marketplace. The application is interested in watching for `mint`, `transfer`, `transferSingle` and various other events to trigger different type of action and rendering on Client side. For instance, they can subscribe to `mint` event of a specific contract address to watch if a new NFT has been created. Once confirmed, they call [get external NFT metadata endpoint](https://www.covalenthq.com/docs/api/#get-/v1/{chain_id}/tokens/{contract_address}/nft_metadata/{token_id}/) to fetch NFT details.



Refer the following code to open up a subscription.

```jsx
var Stomp = require('stompjs');
function successCallback() {
  
    var sub1 = client.subscribe("/v1/1/events/address/0x7be8076f4ea4a4ad08075c2508e481d6c946d12b/", function(message){
        console.log("========================================SUB1 START=============================================================")
        console.log("This is sub1 data: " + message.body)
        console.log("========================================SUB1 END=============================================================")
    });

}
var url = "wss://api.covalenthq.com/v1/";
var client = Stomp.overWS(url);
client.heartbeat.incoming = 0;
client.heartbeat.outgoing = 10000;

var timeout = 5000;
client.connect({}, function (frame) {
    console.log("Connected: " + frame);
    successCallback();

}, function(error) {
    console.log("You disconnected: " + error);
    client.disconnect(function() {
        setTimeout(() => {
            reconnect("wss://api.covalenthq.com/v1/", successCallback);
        },5000);

    });
});

var mytimeOut;
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

You can reach out to product expert by writing an email to **[this](anadi@covalenthq.com)** or write on [governance forum](https://gov.covalenthq.com/c/dev/api/14) directly to engage with our vibrant community for help.