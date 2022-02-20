import React from "react";
import './Mentor.css';
import { Link } from 'react-router-dom';
import getSpots from "../../hooks/getSpots";
import { BsChatDotsFill } from 'react-icons/bs';
import { MdCall, MdTaskAlt } from 'react-icons/md';



export default function Mentors(props) {

  const state = props.data;
  console.log("months", state);

  const mentorListings = state.mentorlist.mentorList && state.mentorlist.mentorList.map(user => {
    return <article className="mentor">
      <header className="mentor--header">
        <img className="mentor--avatar" src={user.image_url} />
        <div className="mentor--desc">
          <h2 className="h2">About Me</h2>
          <div className="mentor--desc">{user.description}</div>
        </div>
      </header>
      <div className="mentor--body">
        <p>Name       : {user.name}</p>
        <p>Speciality : {user.speciality}</p>
        <p>Language   : {user.language}</p>
        <p>Location   : {user.location}</p>
        <p>Spots Available : {getSpots(user.user_id, state.vacantspots.available_spots)}</p>

      </div>

      <div className="book--body">
        <div className="footer">
          <div className="fa-icons">
            <div className="chat-icon">Chat
              <BsChatDotsFill />
            </div>
            <div className="call-icon">2 Calls
              <MdCall />
            </div>
            <div className="tasks-icon">Tasks
              <MdTaskAlt />
            </div>
          </div>
          <div className="monthly-pay">
            <h3>$100/ month</h3> <br />
          </div>
        </div>
        {props.user &&
          <Link className='book-links' to={{
            pathname: "bookmentor",
            state: user,
            student: props.user,
            months: state.months_tbl
          }}>
            Book
          </Link>}
      </div>
    </article>
  });

  return (
    <section className="container-mentors">
      {/* <video className="video-mentors" autoPlay loop muted src={Video2} type='video/mp4'></video> */}
      <div className="tweets">
        {mentorListings}
      </div>
    </section>
  )
}
