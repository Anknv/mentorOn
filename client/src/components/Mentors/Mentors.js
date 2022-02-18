import React from "react";
import './Mentor.css';
import { Link } from 'react-router-dom';
import getSpots from "../../hooks/getSpots";


export default function Mentors(props) {


  const state = props.data;
  console.log("Vacant Spots",state.vacantspots);



  const mentorListings = state.mentorlist.mentorList && state.mentorlist.mentorList.map(user =>
    {
     return <article className="mentor">
      <header className="mentor--header">
        <img className="mentor--avatar" src={user.image_url} />
        <div className="mentor--desc">{user.description}</div>
      </header>
      <div className="mentor--body">
        <p>Name       : {user.name}</p>
        <p>Email      : {user.email}</p>
        <p>Speciality : {user.speciality}</p>
        <p>Language   : {user.language}</p>
        <p>Location   : {user.location}</p>
        <p>Spots Available : {getSpots(user.user_id,state.vacantspots.available_spots)}</p>

      </div>

      <div className="book--body">
        <h3>$100/ month</h3> <br />
        {props.user &&
          <Link className='book-links' to={{
            pathname: "bookmentor",
            state: user,
            student: props.user
          }}>
            Book
          </Link>}
      </div>


    </article>
    });

  return (
    <section className="tweets">

      {mentorListings}

    </section>
  )
}
