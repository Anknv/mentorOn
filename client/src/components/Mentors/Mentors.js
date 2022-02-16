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
          <h2 className="tweet--name">{user.name}</h2>
          <small className="tweet--handle">Email : {user.email}</small>
        </header>

        <div className="tweet--body">
          <p>{user.description}</p>
        </div>
        <div className="tweet--body">
          <p>Location   : {user.location}</p>
          <p>Language   : {user.language}</p>
          <p>Speciality : {user.speciality}</p>

          <div className='book-menu'>
        <ul>
          <Link className='book-links' to="bookmentor">
            Book
          </Link>

        </ul>
      </div>
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
