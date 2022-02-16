import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Mentors from "./components/Mentors/Mentors";

export default function App(props) {

  const {
    state
  } = useApplicationData();
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
         <div className="page-content">
            <Switch>
               <Route exact="true" path="/" component={Home} />
               <Route path="/mentors" render={props => <Mentors data={state}/>} />
           </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
