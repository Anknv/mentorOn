import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// useApplicationData contains the core logic that interacts with API server to retrieve
// the data from the database.
export default function useApplicationData(){
const [state, setState] = useState({
  users:{},
  mentorlist:{}
});


console.log("User APplication")

useEffect(() => {
  console.log("Working?")
  Promise.all([
    axios.get('/api/users'),
    axios.get('/api/mentorListings')
  ]).then((all) => {
    console.log("all",all);
    const [first, second] = all;
    console.log("second",second.data);
    setState(prev => ({ ...prev, users : first.data, mentorlist : second.data}));
  }).catch (err => console.log(err));
},[]);

return {state};
};


