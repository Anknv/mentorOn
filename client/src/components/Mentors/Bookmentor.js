import React from "react";
import './Bookmentor.css';

export default function Bookmentor() {



  return (

    <form action="/api/search-listings" method="POST" id="search-listing-form" class="search-listing-form">
    <div class="payment-page">
    <div class="container">
      <h1>Confirm Your Payment</h1>
      <div class="first-row">
        <div class="owner">
          <h3>Owner</h3>
          <div class="input-field">
            <input type="text" />
          </div>
        </div>

      <div class="CVV">
          <h3>CVV</h3>
          <div class="input-field">
            <input type="password" />
          </div>
        </div>
      </div>
      <div class="second-row">
        <div class="card-number">
          <h3>Card Number</h3>
          <div class="input-field">
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="third-row">
         <h3>Expiration Date</h3>
         <div class="selection">
           <div class="date">
             <select name="months" id="months">
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
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
             <div class="cards">
                <img src="https://w7.pngwing.com/pngs/32/363/png-transparent-visa-master-card-and-american-express-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-background-text-display-advertising-logo.png" alt="" />
             </div>
        </div>
    </div>
    <a href="">Confirm</a>
    <a href="">Cancel</a>
  </div>
  </div>
  </form>


  )
}
