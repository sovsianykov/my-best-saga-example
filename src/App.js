import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchData } from "./redux/actions";
import { Button } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App
