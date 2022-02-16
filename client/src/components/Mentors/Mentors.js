import React from "react";
import './Mentor.css';
import { Link } from 'react-router-dom';

export default function Mentors(props) {
  console.log("Test",props.data);
  const state = props.data;
  const mentorListings = state.mentorlist.mentorList && state.mentorlist.mentorList.map(user =>

    <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={user.image_url}/>
          <div className="mentor--body">{user.description}</div>
        </header>
        <div className="tweet--body">
          <p>Name       : {user.name}</p>
          <p>Email      : {user.email}</p>
          <p>Speciality : {user.speciality}</p>
          <p>Language   : {user.language}</p>
          <p>Location   : {user.location}</p>

        </div>

        <div className="book--body">
          <h3>$100/ month</h3> <br/>
          <Link className='book-links' to="bookmentor">
            Book
          </Link>
        </div>


      </article>
  );
    // <li key={user.user_id}>{user.name}
    // {user.speciality} { }
    // {user.location} { }
    // {user.language} { }
    // {user.email} { }
    // {user.image_url} {}
    // {user.description}</li>);
  return (
    <section className="tweets">

      {mentorListings}

    </section>
  )
}
