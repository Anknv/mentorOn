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
    console.log(req.query);
    const mentor_id = Number(req.query.mentor_id);
    let query = `SELECT COUNT(*) AS spots
                        FROM sessions
                 WHERE mentor_id = ${mentor_id}`;
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
