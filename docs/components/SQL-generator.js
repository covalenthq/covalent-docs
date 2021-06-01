import React from "react"
import { allChainData } from "./chain-info";

import "../css/components/topic-calculator.css"

class SQLApp extends React.Component {

    constructor() {
        super();
        this.state = {
            address_input: "0xc00e94cb662c3520282e6f5717214004a7f26888",
            error: false,
            error_message: "",
            text: "Copy to clipboard",
            chain_id: "chain_eth_mainnet",
            all_chains_data: []
        };
    }

    async componentDidMount() {
      await this._fetchAllChainsData();
    }

     _fetchAllChainsData = async () => {
      const response = await fetch("https://api.covalenthq.com/v1/chains/?key=ckey_6b87a4a549ff46e6971c3e6341f")
      if (response.ok) {
        const data = await response.json()
        this.setState({all_chains_data: data.data.items});
      } else {
        this.setState({error: true});
      }
    }
    
    _renderOptions = (chain_id) => {
      if (allChainData.has(Number(chain_id))) {
        return (<option value={allChainData.get(Number(chain_id)).dbname}>{allChainData.get(Number(chain_id)).chain_name}</option>);
      }
    }


    render() {

        var err = this.state.error ? this.state.error_message : null;

      return <div className="topics">
        {this.state.all_chains_data.length !== 0 ? <div>

        <p>Enter the contract address:</p>
        <input placeholder="Contract address"
            value={this.state.address_input}
            onChange={this._inputAddress}
            style={{marginRight: "1rem", border: "none"}}
        />

        <select style={{marginRight: "1rem", height: 39}} onChange={this._inputChainId}>
          {this.state.all_chains_data.map(o => this._renderOptions(o.chain_id))}
        </select>

        <button onClick={this._clickNext} >Get event SQL!</button>
      </div> : null}

      {err}

      {this.state.error?" Try to enter it again. ":(this._renderEvents())}
      </div>

    }

   _sql = (s,e) => {
     let inputs = e.inputs;
     const ifields = inputs.filter(input => input.indexed).map((inp,i)=>{
      switch (inp.type) {
          case "address":
              return "'0x' || encode(extract_address(e.topics[" + (i + 2) + "]), 'hex') AS logged_" + inp.name.toLowerCase();
          default:
              return "e.topics[" + (i + 2) + "] AS logged_" + inp.name.toLowerCase();
       }
     });

     const dfields = inputs.filter(input => !input.indexed).map((inp,i) => {
      switch (inp.type) {
         case "address":
              return "'0x' || encode(extract_address(abi_field(e.data, " + i + ")), 'hex') AS logged_" + inp.name.toLowerCase();
          default:
              return "cast(abi_field(e.data, " + i + ") as numeric) AS logged_" + inp.name.toLowerCase();
      }
     });


return <pre>
SELECT <br/>
{"    e.block_signed_at,"} <br />
{"    e.block_height,"} <br />
{"    '0x' || encode(e.tx_hash, 'hex') AS tx_hash,"} <br />
{"    " + ifields.join(", \n    ")}{dfields.length > 0 ? "," : ""}   <br/>
{"    " + dfields.join(", \n    ")} <br />
FROM {this.state.chain_id}.block_log_events e <br />
WHERE <br />
{"    "} e.sender = {"'\\x" + this.state.address_input.substr(2) + "'"} <br />
{"    "} AND e.topics[1] = {"'\\x" + s.substr(2) + "'"}
</pre>;


    }


    _renderEvents = () => {
        if (this.state.events !== undefined){
         let items = this.state.events.data.items[0].abi_items;
         let a = items.filter((item)=> {
           return item.signature !==null;
         })

         return <div className="topics">
             <p>Found {a.length} Topics:</p>

               {a.map(item => {
                  const result = this._sql(item.topic_hash, item.abi);
                  return <div>
                  <ul style={{listStyleType: "none", paddingLeft: 0}}>
                    <h3> {item.signature.replace(/([A-Z])/g, ' $1').trim()} </h3>
                    <div class="box" style={{position: "relative"}}>
                    <code>{item.topic_hash}</code>
                    {result}
                     <li> <button style={
                       {
                         position: "absolute",
                         right: 0,
                         top: 62,
                         paddingLeft: 10,
                         paddingRight: 10,
                       }
                     }
                     id={
                       item.topic_hash
                     }
                     className="buttonW"
                     onClick={
                       this._copyFunction.bind(this, result, item.topic_hash)
                     }>
                       <svg style={{width:25, height:25}} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="17" height="17" rx="2" stroke="white" strokeWidth="3"/>
<path d="M12 19.9688V27C12 28.1046 12.8954 29 14 29H27C28.1046 29 29 28.1046 29 27V14C29 12.8954 28.1046 12 27 12H19.9688" stroke="white" strokeWidth="3"/>
</svg>
                       </button></li>
                    </div>
                    </ul>
                    </div>
               })}


           </div>;

        }

       }


    _clickNext = () => {

        if (this.state.address_input.length === "0xc00e94cb662c3520282e6f5717214004a7f26888".length) {
          fetch("https://api.covalenthq.com/v1/1/events/address/" +
            this.state.address_input + "/abi/?&key=ckey_4d5b231f1a584413ae6c3715bcf")
          .then(response => response.json())
          .then((data)=> {

            if(data.data.items.length === 0) {
              this.setState({
                error: true,
                error_message: "Invalid contract address!"

              });
            }
            else {
              this.setState({
                events: data, //data
                error: false
              });

            }

          }).catch((err) => {
            console.log(err + " thrown out when fetching the API!");

          })
        } else {
          this.setState({
            error: true,
            error_message: "Contract address shorter than expected!"
          });
        }
      }

      _copyFunction = (a,b,c) => {
        // console.log(a); //a is result
        // console.log(b); //topic hash

        let textArray = a.props.children;
        let bigStr = "";
        for (let x of textArray){
          if (typeof x === 'string' || x instanceof String) {
            if (x.length !== 0) {
              bigStr += x;
            }
          }
          else {
            bigStr += "\n";
          }

        }

        let aa = document.getElementsByClassName("buttonW");
        for (let item of aa){
          if (item.id === b){
            document.getElementById(b).innerText = "Copied!";
          }
          else{

          }

        }
        this.copyToClipboard(bigStr);


      }


      copyToClipboard = (contents) => {
        // tslint:disable-next-line:no-unused
        let selectedText = "";

        const fakeElement = document.createElement("textarea");

        fakeElement.style.fontSize = "12pt";
        fakeElement.style.border = "0";
        fakeElement.style.padding = "0";
        fakeElement.style.margin = "0";
        fakeElement.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px";
        fakeElement.style.position = "fixed";
        fakeElement.style[document.documentElement.getAttribute("dir") === "rtl" ? "right" : "left"] = "-9999px";
        fakeElement.setAttribute("readonly", "");

        fakeElement.value = contents;
        document.body.appendChild(fakeElement);
        fakeElement.focus();
        fakeElement.setSelectionRange(0, fakeElement.value.length);

        selectedText = fakeElement.value;

        document.execCommand("copy");
        (window.getSelection()).removeAllRanges();

    };




    _inputAddress = (e) => {
        this.setState({
          //under setState, can just set one field
          //e here is the value when calling this function
          //when setState is called, calling render function again
          address_input: e.target.value
        });
      }

      _inputChainId = (e) => {
        this.setState({
          chain_id: e.target.value
        })
      }
}




export default (props) => {
    return (

      <SQLApp />

    )
  }