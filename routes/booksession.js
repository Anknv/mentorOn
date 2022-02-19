/*
 * All routes for mentorListings are defined here
 * Since this file is loaded in server.js into api/mentorListings,
 *   these routes are mounted onto /mentorListings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    // console.log("Req Body",req.body);
    // const mentor_id = Number(req.body.params.mentor_id);
    console.log("req body",req.body);
    const user_id = req.body.params.user_id;
    const mentor_id = req.body.params.mentor_id;
    const month_id = req.body.params.month_id;

    console.log("Req" + " " + typeof user_id + " " + typeof mentor_id + " " + typeof month_id);

    let query = `INSERT INTO sessions (user_id,mentor_id,month_id)
    VALUES (${user_id},${mentor_id},${month_id})`;
    console.log(query);
    db.query(query)
      .then(data => {
        res.send("Session Insert Successful");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
