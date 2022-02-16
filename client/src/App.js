import React, { useState } from "react";
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
import Login from "./components/Login/Login";
import Mentors from "./components/Mentors/Mentors";
import { Dashboard } from "./components/Dashboard";

export default function App(props) {

  const [user, setUser] = useState(null);
  const {
    state
  } = useApplicationData();
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
         <div className="page-content">

          {/* <Fragment> */}
            <Switch>
               <Route exact="true" path="/" component={Home} />
               <Route path="/login" render={(props) => <Login {...props} user={user} setUser={setUser} />} />
               <Route path="/mentors" render={props => <Mentors data={state} />} />
               <Route path="/dashboard" component={Dashboard} />
           </Switch>
         {/* </Fragment> */}
        </div>
      </BrowserRouter>
    </div>
  );
};
