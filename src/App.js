import React from "react";
import './App.css';
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/actions";
import { Button } from "@material-ui/core";

function App() {
  const dispatch = useDispatch()
  const btnHandler = () =>{
    dispatch(fetchData())
  }
  return (
    <div className="App">
    <Button onClick={btnHandler}>FETCH DATA</Button>
    </div>
  );
}

export default App;
