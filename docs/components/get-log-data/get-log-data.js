import React, { useState, useRef } from "react";
import "../../css/components/topic-calculator.css";
import GetContractLogs from "./get-contract-logs";
import GetTopicHashLogs from "./log-events-topic-hash";
// import Accordion from "./accordion"
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
      {/* <div>
     <Accordion
       title="What is your return policy?"
       content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     
     <Accordion
       title="Get Contract Logs"
       content= {GetContractLogs}
       />
       
       
   </div> */}

   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">Get Contract Logs</p>
     </button>
     <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
       <GetContractLogs />
     </div>
   

   
     {/* <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">Get Topic Hash Logs</p>
     </button>
     <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
     <GetTopicHashLogs />
     </div> */}
   </div>

       
      </div>
    </div>
  );
};

export default GetLogs;
