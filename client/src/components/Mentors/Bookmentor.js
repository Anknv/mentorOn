import React, { useEffect } from "react";
import './Bookmentor.css';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import getMonthID from "../../hooks/getMonthID";

export default function Bookmentor({history}) {

const param = useLocation();
const user  = param.state;
const student = param.student;
const months  = param.months;
console.log("user",user);
console.log("student",student);
const [mon, setMon] = useState("");
const [year,setYear] = useState("")
function bookSession() {
  console.log("booksession");
  const month_id = getMonthID(mon,year,months);
  axios.post('/api/booksession',{
    params: {
      user_id: student.id,
      mentor_id: user.user_id,
      month_id
    }
  }).then(() => {
    console.log("After Inserting into Sessions")
    history.replace("/dashboard");
  }).catch(error => console.log(error))
}

function setMonth(event) {
    setMon(event.target.value);
}

function setYearVal(event) {
  console.log("Onchange Year");
    setYear(event.target.value);
}

function paymentCheckout(event) {
  event.preventDefault();

   axios.post('/api/paymentcheckout').then(() => {
     console.log("After Post")
     bookSession();
   }).catch(error => console.log(error))
}

function findmentors(){
  history.replace("/mentors");
}

  return (

 <>
    <div className="sessions">
    <h2>Booking Session With {user.name}</h2>
    </div>
    <div className="sessions">
          <img className="book--avatar" src={user.image_url}/>
          <div className="bookmonth">
            <p>Select Month :</p>
             <select name="months" id="months" onChange={setMonth}>
               <option value="">Month</option>
               <option value="March">March</option>
               <option value="April">April</option>
              </select>
           </div>

           <div className="bookyear">
             <p>Select Year :</p>
             <select name="year" id="year" onChange={setYearVal}>
               <option value="">Year</option>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
              </select>
           </div>
      </div>

    <form onSubmit={paymentCheckout}>
    <div className="payment-page">
    <div className="container">
      <h3>Confirm Your Payment</h3><br/>
      <div className="first-row">
        <div className="owner">
          <h>Owner</h>
          <div className="input-field">
            <input type="text" />
          </div>
        </div>

        <div className="CVV">
          <h>CVV</h>
          <div className="input-field">
            <input type="password" />
          </div>
        </div>

      </div>
      <div className="second-row">
        <div className="card-number">
          <h>Card Number</h>
          <div className="input-field">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="third-row">
         <h>Expiration Date</h>
         <div className="selection">
           <div className="date">
             <select name="months" id="months">
             <option value="Month">Month</option>
               <option value="Jan">Jan</option>
               <option value="Feb">Feb</option>
               <option value="Mar">Mar</option>
               <option value="Apr">Apr</option>
               <option value="May">May</option>
               <option value="Jun">Jun</option>
               <option value="Jul">Jul</option>
               <option value="Aug">Aug</option>
               <option value="Sep">Sep</option>
               <option value="Oct">Oct</option>
               <option value="Nov">Nov</option>
               <option value="Dec">Dec</option>
              </select>
              <select name="years" id="years">
              <option value="Year">Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
             <div className="cards">
                <img src="https://w7.pngwing.com/pngs/32/363/png-transparent-visa-master-card-and-american-express-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-background-text-display-advertising-logo.png" alt="" />
             </div>
        </div>
    </div>
    <button  name="submit" className="book-btn">Confirm</button>
    <button  name="button" className="book-btn" onClick={findmentors}>Cancel</button>
  </div>
  </div>
  </form>
  </>

  )
}
