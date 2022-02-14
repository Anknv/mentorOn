/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { getUserFromSession } = require('../src/getUserFromSession');
const router  = express.Router();

module.exports = (db) => {
  router.get("/mentor-card", (req, res) => {
    const monthId = req.query.month_id;
    const user = getUserFromSession(req.session);
    getMentorCard(db, monthId, user.user_id).then;
  });
  return router;
};
