import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const GetTopicHashLogs = () => {
  const data = [
    {
      value: 1,
      label: "Ethereum",
    },
    {
      value: 56,
      label: "Binance Smart Chain",
    },
    {
      value: 137,
      label: "Polygon",
    },
    {
      value: 43114,
      label: "Avalanche C-Chain",
    },
  ];

  const [network, setNetwork] = useState("");

  const [address, setAddress] = useState("");
  const [topicHash, setTopicHash] = useState("");

  const [startingBlock, setStartingBlock] = useState("");
  const [endingBlock, setEndingBlock] = useState("latest");

  const [pageNumber, setPageNumber] = useState("0");
  const [pageSize, setPageSize] = useState("999999999");

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleTopicHash = (e) => {
    setTopicHash(e.target.value);
  };

  const handleStartingBlock = (e) => {
    setStartingBlock(e.target.value);
  };

  const handleEndingBlock = (e) => {
    setEndingBlock(e.target.value);
  };

  const handlePageNumber = (e) => {
    setPageNumber(e.target.value);
  };

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };

  const URL_String = `https://api.covalenthq.com/v1/1/events/topics/${topicHash}/?starting-block=${startingBlock}&ending-block=${endingBlock}&sender-address=${address}&page-number=${pageNumber}&page-size=${pageSize}&format=csv`
  
  const handleSubmit = () => {
    window.location.replace(`${URL_String}`);
  };

  return (
    <div>
      <div className="topics">
       
        <div>
          <p>Enter the Sender Address</p>
          <input
            value={address}
            onChange={handleAddress}
          />{" "}

<p>Enter the Topic String</p>
<input
            
            value={topicHash}
            onChange={handleTopicHash}
          />{" "}

</div>
<div>
  <p>Enter Starting Block</p>
         <input
            value={startingBlock}
            onChange={handleStartingBlock}
          />{" "}
        <p>Enter Ending Block</p>
          <input
          
            value={endingBlock}
            onChange={handleEndingBlock}
          />{" "}
        </div>
        
        <div>
          <p>Enter the Page Number</p>
          <input value={pageNumber} onChange={handlePageNumber} />{" "}
        
          <p>Enter the Page Size</p>
          <input value={pageSize} onChange={handlePageSize} />{" "}
        </div>
        
        <Dropdown
          placeholder="Select Network"
          value={network}
          options={data}
          onChange={setNetwork}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GetTopicHashLogs;
