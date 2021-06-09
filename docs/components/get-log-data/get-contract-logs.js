import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const GetContractLogs = (props) => {
  // const data = [
  //   {
  //     value: 1,
  //     label: "Ethereum",
  //   },
  //   {
  //     value: 56,
  //     label: "Binance Smart Chain",
  //   },
  //   {
  //     value: 137,
  //     label: "Polygon",
  //   },
  //   {
  //     value: 43114,
  //     label: "Avalanche C-Chain",
  //   },
  // ];

  const [network, setNetwork] = useState("");

  const [address, setAddress] = useState("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984");
  const [startingBlock, setStartingBlock] = useState(" ");
  const [endingBlock, setEndingBlock] = useState("latest");

  const [pageNumber, setPageNumber] = useState("0");
  const [pageSize, setPageSize] = useState("999999999");

  const handleAddress = (e) => {
    setAddress(e.target.value);
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

  const URL_String = `https://api.covalenthq.com/v1/${network.value}/events/address/${address}/?key=ckey_API_KEY&starting-block=${startingBlock}&ending-block=${endingBlock}&page-number=${pageNumber}&page-size=${pageSize}&format=csv`;
  // You can use the address and block height below to run tests
  // 0x7d91e637589EC3Bb54D8213a9e92Dc6E8D12da91
  //12044973
  
  const handleSubmit = () => {
    window.location.replace(`${URL_String}`);
  };

  return (
    <div>
      <div className="topics">
        <p>
          Enter the required information
        </p>
        <p>
          By default it returns an example response based on the specified block heights. Select the network from the drop down and click `submit` to get a response.
        </p>

        <div>
          <p>Enter the Contract Address</p>
          <input
            value={address}
            onChange={handleAddress}
          />{" "}

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
          options={props.chains}
          onChange={setNetwork}
        />

        <button style={{marginTop: "1rem"}} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GetContractLogs;
