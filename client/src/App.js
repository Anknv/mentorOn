import React from "react";
import './App.css';
import useApplicationData from "./hooks/useApplicationData";

export default function App(props) {

  const {
    state
  } = useApplicationData();

  console.log(state);

   const userList = state.mentorlist && state.mentorlist.map(user => <li key={user.id}>{user.name} </li>);
  return (
    <div className="App">
      <ul>
        {userList}
      </ul>
    </div>
  );
};
