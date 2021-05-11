import React, { useState } from "react";
import "../../css/components/topic-calculator.css";
import GetContractLogs from "./get-contract-logs";
import GetTopicHashLogs from "./log-events-topic-hash";

const GetLogs = () => {
  
  return (
    <div>
      <div className="topics">
       <GetContractLogs />
       <GetTopicHashLogs />
      </div>
    </div>
  );
};

export default GetLogs;
