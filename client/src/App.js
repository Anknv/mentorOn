import React, { useEffect,Fragment } from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Switch
} from "react-router-dom";


// ...


import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import TweetList from "./components/Listings";
import Home from "./components/Home/Home";
import Mentors from "./components/Mentors/Mentors";

export default function App(props) {

  const {
    state
  } = useApplicationData();

   console.log("state",state);
   console.log("MentorList",state.mentorlist);

  const UserList = <ul>{state.mentorlist.mentorList && state.mentorlist.mentorList.map(user =>
  <li key={user.user_id}>{user.name}
  {user.speciality} { }
  {user.location} { }
  {user.language} { }
  {user.email} { }
  {user.image_url} {}
  {user.description}</li>)}</ul>
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
         <div className="page-content">

          {/* <Fragment> */}
            <Switch>
               <Route exact="true" path="/" component={Home} />
               <Route path="/mentors" component={Mentors} />
           </Switch>
         {/* </Fragment> */}

        </div>
      </BrowserRouter>
    </div>
  );
};
