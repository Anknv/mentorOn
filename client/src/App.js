import React, { useEffect } from "react";
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";

export default function App(props) {

  const {
    state
  } = useApplicationData();
// useEffect(() => {
//   console.log("MentorAxios")
//   axios.get('/api/mentorListings')
// },[]);

  // useEffect(() => {

  //   Promise.all([
  //     axios.get('http://localhost:8080/api/users'),
  //     axios.get('http://localhost:8080/api/mentorListings')
  //   ]).then((all) => {
  //     console.log("all",all);
  //     const [first, second] = all;
  //     console.log("second",second.data);
  //     setState(prev => ({ ...prev, users : first.data, mentorlist : second.data}));
  //   }).catch (err => console.log(err));
  // },[]);

   console.log("state",state);
   console.log("MentorList",state.mentorlist);

  const userList = state.mentorlist.mentorList && state.mentorlist.mentorList.map(user =>
  <li key={user.user_id}>{user.name}
  {user.speciality} { }
  {user.location} { }
  {user.language} { }
  {user.email} { }
  {user.image_url} {}
  {user.description}</li>);
  return (
    <div className="App">
      <Navbar />
      
      <ul>
        {userList}
      </ul>
    </div>
  );
};
