/*
 * All routes for mentorListings are defined here
 * Since this file is loaded in server.js into api/mentorListings,
 *   these routes are mounted onto /mentorListings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/check", (req, res) => {
    // console.log("Req Body",req.body);
    // const mentor_id = Number(req.body.params.mentor_id);
    let query = `SELECT COUNT(*),mentor_id
                        FROM sessions
                 GROUP BY mentor_id`;
    console.log(query);
    db.query(query)
      .then(data => {
        const available_spots = data.rows;
        res.json({ available_spots });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
