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


useEffect(() => {
  Promise.all([
    axios.get('/api/users'),
    axios.get('/api/mentorListings'),
    axios.get('/api/getspots/check'),
    axios.get('/api/getmonths')
  ]).then((all) => {
    const [first, second, third, fourth] = all;
    setState(prev => ({
      ...prev,
      users : first.data,
      mentorlist : second.data,
      vacantspots : third.data,
      months_tbl: fourth.data.months
    }));
  }).catch (err => console.log(err));
},[]);

return {state};
};


