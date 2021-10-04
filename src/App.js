import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
import { applyNumber, operationChange, clearDisplay, setMemory, appliedMemory, clearMemory } from './actions';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  

  const handleMath = (num) => {
    dispatch(applyNumber(num));
    console.log(applyNumber(num));
  }

  const handleOperation = (operation) => {
    dispatch(operationChange(operation));
  }

  const handleClear = () => {
    dispatch(clearDisplay());
  }

  const handleSetMemory = () => {
    dispatch(setMemory());
  }

  const handleClearMemory = () => {
    dispatch(clearMemory());
  }

  const handleAppliedMemory = () => {
    dispatch(appliedMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=> handleSetMemory()}/>
              <CalcButton value={"MR"} onClick={()=> handleAppliedMemory()}/>
              <CalcButton value={"MC"} onClick={()=> handleClearMemory()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> handleMath(1)}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> handleOperation("+")}/>
              <CalcButton value={"*"} onClick={()=> handleOperation("*")}/>
              <CalcButton value={"-"} onClick={()=> handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App; 
