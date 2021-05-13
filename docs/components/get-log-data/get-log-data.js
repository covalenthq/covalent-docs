import React, { useState, useRef } from "react";
import "../../css/components/topic-calculator.css";
import GetContractLogs from "./get-contract-logs";
import GetTopicHashLogs from "./log-events-topic-hash";
import "./accordion.css";

const GetLogs = () => {

  const [setActive, setActiveState] = useState(" ");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);


  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  
  return (
    <div>
      <div className="topics">
   <GetContractLogs />

   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">Get Log Events by Topic Hashes</p>
     </button>
     <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
     <GetTopicHashLogs />
     </div>
   </div>

       
      </div>
    </div>
  );
};

export default GetLogs;
