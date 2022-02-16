import React from "react";

export default function Mentors(props) {
  console.log("Test",props.data);
  const state = props.data;
  const UserList = <ul>{state.mentorlist.mentorList && state.mentorlist.mentorList.map(user =>
    <li key={user.user_id}>{user.name}
    {user.speciality} { }
    {user.location} { }
    {user.language} { }
    {user.email} { }
    {user.image_url} {}
    {user.description}</li>)}</ul>
  return <h1>
    This is the MentorList Page
    {UserList}
  </h1>
}
