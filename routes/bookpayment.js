/*
 * All routes for mentorListings are defined here
 * Since this file is loaded in server.js into api/mentorListings,
 *   these routes are mounted onto /mentorListings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = (db) => {
  router.post("/", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price_data: { currency: 'usd', product_data: { name: 'T-shirt', }, unit_amount: 2000, }, quantity: 1, },],
      mode: "payment",
      success_url: "http://localhost:3000/mentors",
      cancel_url: "http://localhost:3000/bookmentor"
    });
    res.redirect(303,session.url);
  });
  return router;
};
