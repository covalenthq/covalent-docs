import React, { useState, useRef, useEffect } from "react";
import "../../css/components/topic-calculator.css";
import GetContractLogs from "./get-contract-logs";
import GetTopicHashLogs from "./log-events-topic-hash";
import { allChainData } from '../chain-info';
import "./accordion.css";

const GetLogs = () => {

  const [setActive, setActiveState] = useState("");
  const [setOverflow, setOverflowState] = useState("hidden");
  const [setHeight, setHeightState] = useState("0px");
  const [chainData, setChainData] = useState([]);

  const content = useRef(null);

  const temp = [];

  useEffect(() => {
    fetchAllChainsData()
  }, []);

  const fetchAllChainsData = async () => {
    const response = await fetch("https://api.covalenthq.com/v1/chains/?key=ckey_6b87a4a549ff46e6971c3e6341f")
    if (response.ok) {
      const data = await response.json()
      for (var i = 0; i < data.data.items.length; i++) {
        if (allChainData.has(Number(data.data.items[i].chain_id))) {
          temp[i] = {
            value: data.data.items[i].chain_id,
            label: allChainData.get(Number(data.data.items[i].chain_id)).chain_name
          }
        }  
      }
      setChainData(temp);
    } 
  }


  function toggleAccordion() {
    setOverflowState(setOverflow === "hidden" ? "" : "hidden");
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  
  return (
    <div>
      {chainData.length !== 0 ? <div className="topics">
        <GetContractLogs chains={chainData}/>

      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">Get Log Events by Topic Hashes</p>
        </button>
        <div ref={content} style={{ maxHeight: `${setHeight}`, overflow: `${setOverflow}`, transition: `${setOverflow === "hidden" ? "max-height 0.6s ease" : "overflow 0s linear 0s"}`}} className="accordion__content">
          <GetTopicHashLogs chains={chainData} />
        </div>
      </div>
      </div> : null }
    </div>
  );
};

export default GetLogs;
