import React, {useState} from "react";
import "./App.scss";


import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

import Operators from "./components/ButtonComponents/OperatorButtons/Operators";

import Specials from "./components/ButtonComponents/SpecialButtons/Specials";


iimport React,{Component} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import ActionKeys from "./components/ButtonComponents/ActionKeys"
import NumberKeys from "./components/ButtonComponents/NumberKeys"
import ResultComponent from "./components/DisplayComponents/CalculatorDisplay"

class App extends Component {
  constructor(){
    super();
    this.state={
      result: ""
    }
  }
  onClick = button => {
    if(button === "="){
      this.calculate()
      console.log('click1')
    }
       else if(button === "clear"){
         this.backspace()
         console.log('click2')
    }
       else{

         this.setState({
           result:this.state.result + button,

         })
         console.log('click3')
       }
    };

    calculate = () => {
      try {
        this.setState({
          //eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""

        })
      } catch (e){
        this.setState({
          result: "error"
        })
      }
    };

    backspace = () => {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    };
  render(){
  return (
    <div className='calculator'>

        <ResultComponent result={this.state.result}/>


       <NumberKeys onClick={this.onClick}/>
       <ActionKeys onClick={this.onClick} />



    </div>
  );
}
}

export default App