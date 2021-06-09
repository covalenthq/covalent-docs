import React, { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "../css/components/topic-calculator.css";

const TokenHolders = () => {
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

  const temp = [];
  
  const [network, setNetwork] = useState("");

  const [address, setAddress] = useState("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984");
  const [blockHeight, setBlockHeight] = useState("latest");

  const [pageNumber, setPageNumber] = useState("0");
  const [pageSize, setPageSize] = useState("999999999");
  const [chainData, setChainData] = useState([]);

  useEffect(() => {
    fetchAllChainsData()
  }, [])

  const fetchAllChainsData = async () => {
    const response = await fetch("https://api.covalenthq.com/v1/chains/?key=ckey_6b87a4a549ff46e6971c3e6341f")
    if (response.ok) {
      const data = await response.json()
      for (var i = 0; i < data.data.items.length; i++) {
          temp[i] = {
            value: data.data.items[i].chain_id,
            label: data.data.items[i].label
          } 
      }
      setChainData(temp); 
    }
  }

  const handleNetwork = (e) => {
    setNetwork(e);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleBlockHeight = (e) => {
    setBlockHeight(e.target.value);
  };

  const handlePageNumber = (e) => {
    setPageNumber(e.target.value);
  };

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };

  const URL_String = `https://api.covalenthq.com/v1/${network.value}/tokens/${address}/token_holders/?key=ckey_API_KEY&block-height=${blockHeight}&page-number=${pageNumber}&page-size=${pageSize}&format=csv`;
  // You can use the address and block height below to run tests
  // 0x7d91e637589EC3Bb54D8213a9e92Dc6E8D12da91
  //12044973

  const handleSubmit = () => {
    window.location.replace(`${URL_String}`);
  };

  return (
    <div>
      {chainData.length !== 0 ? <div className="topics">
        <p>
          Enter the Address and the Block Height to download a list of Token Holders.
        </p>
        <p>
          By default it returns an example response of the token holders of the UNI token as of latest block height. Select Ethereum Mainnet from the drop down and click `submit` to see the example response.
        </p>

        <div>
          <input
            placeholder="Enter the Address"
            value={address}
            onChange={handleAddress}
          />{" "}

          <input
            placeholder="Enter Block height"
            value={blockHeight}
            onChange={handleBlockHeight}
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
          options={chainData}
          onChange={setNetwork}
        />

        <button style={{marginTop: "1rem"}} onClick={handleSubmit}>Submit</button>
      </div> : null }
    </div>
  );
};

export default TokenHolders;
