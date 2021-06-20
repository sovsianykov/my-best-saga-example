import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { fetchData } from "./redux/actions";
import { Button } from "@material-ui/core";

function App() {
  const dispatch = useDispatch()
  const btnHandler = () =>{
    dispatch(fetchData())
  }
  const state = useSelector(state => state.apiReducer)
  console.log(state)
  return (
    <div className="App">
    <Button onClick={btnHandler}>FETCH DATA</Button>
      {state.loading ? <p>Loading...</p> : state.error
      ? <p>Error, try again</p> :
          state.list.map((country,id) => (<h5 key={id}>
            {country.name}
          </h5>))
      }
    </div>
  );
}

export default App;
