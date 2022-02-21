import React from "react";
import './Mentor.css';
import { Link } from 'react-router-dom';
import getSpots from "../../hooks/getSpots";
import { BsChatDotsFill } from 'react-icons/bs';
import { MdCall, MdTaskAlt } from 'react-icons/md';
import Footer from "../Footer/Footer";
import useApplicationData from "../../hooks/useApplicationData";

export default function Mentors(props) {
  const {
    state
  } = useApplicationData();
  console.log("months", state);
  console.log("mentorlistings",state.mentorlist.mentorList);

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
        {props.user && getSpots(user.user_id, state.vacantspots.available_spots) !== "Full" &&
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
    <>


      <section className="container-mentors">

        <div className="tweets">
        <p>Filter By</p>
      <select name="Location" id="Location">
               <option value="Toronto">Toronto</option>
               <option value="Ottawa">Ottawa</option>
               <option value="Montreal">Montreal</option>
      </select>
      <select name="Language" id="Language">
               <option value="">Language</option>
               <option value="English">English</option>
               <option value="French">French</option>
      </select>
          {mentorListings}
        </div>
      </section>
      <Footer />
    </>
  )
}
