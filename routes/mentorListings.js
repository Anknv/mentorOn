/*
 * All routes for mentorListings are defined here
 * Since this file is loaded in server.js into api/mentorListings,
 *   these routes are mounted onto /mentorListings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Getting MentorList Details");
    let query = `SELECT A.user_id,
                        B.name,
                        A.description,
                        A.speciality,
                        A.location,
                        A.language,
                        B.email,
                        B.image_url
                        FROM mentors A, users B
                 WHERE A.user_id = B.id`;
    console.log(query);
    db.query(query)
      .then(data => {
        const mentorList = data.rows;
        console.log("mentorListings",data.rows)
        res.json({ mentorList });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
