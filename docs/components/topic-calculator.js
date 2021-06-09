import React from "react"
import { findDOMNode } from "react-dom";

import "../css/components/topic-calculator.css"

class TopicApp extends React.Component {

  constructor() {
    super();
    this.state = {  //set the variables as you like
      address_input: "0xc00e94cb662c3520282e6f5717214004a7f26888",
      error: false,
      error_message: "",
      selected_event: null,
      selected: false,
      event_chosen: false,
      copied:false,
      text: "Copy to clipboard",
      all_chains_data: [],
      chain_id: "250",
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
  
  _renderOptions = (chain_id, label) => {
      return (<option value={chain_id}>{label}</option>);
  }

  //call render first
  render() {

    // if (this.state.wizard === true) {
      var err = this.state.error ? this.state.error_message : null;

      return <div className="topics">
        {this.state.all_chains_data.length !== 0 ? <div>

      {/* and print the input box here */}
        <p>Enter the contract address you want to generate topic hashes for:</p>
        <input placeholder="Contract address"
          value={this.state.address_input}
          onChange={this._inputAddress}
          style={{marginRight: "1rem", border: "none"}}
        />

        <select style={{marginRight: "1rem", height: 39}} onChange={this._inputChainId}>
          {this.state.all_chains_data.map(o => this._renderOptions(o.chain_id, o.label))}
        </select>

        <button onClick={this._clickNext} >Get events!</button>
      </div> : null}

       {/* print error here */}
      {err}

      {this.state.error?" Try to enter it again. ":(this._renderEvents())}
      </div>

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
           //return <li><label><input type="radio" name="signature" value={item.topic_hash} onClick={this._pickRadio}/> {item.signature}</label></li>;
             return <div>
             <ul style={{listStyleType: "none", paddingLeft: 0}}>
               <h3>{item.signature.replace(/([A-Z])/g, ' $1').trim()}</h3>
               <div class="box" style={{position: "relative"}}>
               <code style={{marginRight: "3rem"}}>{item.topic_hash}</code>
               <div style={{marginTop: "1rem"}}>
               <button style={{position: "absolute", right: 0, top: 0, paddingLeft: 10, paddingRight: 10, height: 45}} id={item.topic_hash} className="buttonW" onClick={this._copyFunction.bind(this,item.topic_hash)}><svg style={{width: 25, height: 25}} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="17" height="17" rx="2" stroke="white" strokeWidth="3"/>
<path d="M12 19.9688V27C12 28.1046 12.8954 29 14 29H27C28.1046 29 29 28.1046 29 27V14C29 12.8954 28.1046 12 27 12H19.9688" stroke="white" strokeWidth="3"/>
</svg></button>
               <button className="buttonA" onClick={event => window.location.href=`https://www.covalenthq.com/docs/api/#get-/v1/{chainId}/events/topics/{topic}/`}>Go to API docs</button>
               </div>
               </div>
               </ul>
               </div>
          })}

      </div>;

   }

  }

  _copyFunction = (b,a) => {
    // console.log(b); //b is topic hash
    // // this.notification(a.ref);
    //document.getElementById(b).innerText = "Copied!";
    let aa = document.getElementsByClassName("buttonW");
    for (let item of aa){
      if (item.id === b){
        document.getElementById(b).innerText = "Copied!";
      }
      else{
      }

    }

    this.copyToClipboard(b);

  }

  // notification = () => ;
  //React.findDOMNode(this.ref).text = "copied"

    // console.log("get to notification");
    // alert("The topic hash is copied!\nYou can go to API docs to try it on");

    // updateState = () => this.setState({myState: ‘The state is updated’})
    // React.findDOMNode(this.refs.cpDev1).value;



//how to use radio box to choose the event
  _pickRadio = (changeEvent) => {
    this.setState({
      selected_event: changeEvent.target.value,
      selected: true,
      event_chosen: true
    });
  }
  _clickNext = () => {

    if (this.state.address_input.length === "0xc00e94cb662c3520282e6f5717214004a7f26888".length) {
      fetch(`https://api.covalenthq.com/v1/${this.state.chain_id}/events/address/` +
        this.state.address_input + "/abi/?&key=ckey_4d5b231f1a584413ae6c3715bcf")
      .then(response => response.json())
      .then((data)=> {

        if(data.data.items.length === 0) {
          console.log("no items");
          this.setState({
            error: true,
            error_message: "Invalid contract address!"

          });
        }
        else {
          this.setState({
            events: data,
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

  _inputChainId = (e) => {
    this.setState({
      chain_id: e.target.value
    })
  }


  _inputAddress = (e) => {
    this.setState({
      //under setState, can just set one field
      //e here is the value when calling this function
      //when setState is called, calling render function again
      address_input: e.target.value
    });
  }
}

export default (props) => {
  return (

    <TopicApp />

  )
}
