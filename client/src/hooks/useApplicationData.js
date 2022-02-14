import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
// useApplicationData contains the core logic that interacts with API server to retrieve
// the data from the database.
export default function useApplicationData(){
const [state, setState] = useState({
  users:{},
  mentorlist:{}
});


console.log("User APplication")

useEffect(() => {
  Promise.all([
    axios.get('http://localhost:8080/api/users'),
    axios.get('http://localhost:8080/api/mentorListings')
  ]).then((all) => {
    const [first, second] = all;
    console.log("second",second.data);
    setState(prev => ({ ...prev, users : first.data, mentorlist : second.data}));
  });
},[]);




return {state};
};


