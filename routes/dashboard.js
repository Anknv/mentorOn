/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { createMenteeCalls } = require('../src/dbQueries/createMenteeCalls');
const { createMenteeGoal } = require('../src/dbQueries/createMenteeGoal');
const { deleteMenteeCalls } = require('../src/dbQueries/deleteMenteeCall');
const { getMenteeCalls } = require('../src/dbQueries/getMenteeCalls');
const { getMenteeGoals } = require('../src/dbQueries/getMenteeGoals');
const { getMentorCalls } = require('../src/dbQueries/getMentorCalls');
const { getMentorCard } = require('../src/dbQueries/getMentorCard');
const { getMenteeMonths } = require('../src/dbQueries/getMenteeMonths');
const { getStudentCards } = require('../src/dbQueries/getStudentCards');
const { markGoalDone } = require('../src/dbQueries/markGoalDone');
const { getUserFromSession } = require('../src/getUserFromSession');
const { getMentorMonths } = require('../src/dbQueries/getMentorMonths');
const router  = express.Router();

module.exports = (db) => {

  router.get("/user", (req, res) => {
    const user = getUserFromSession(req.session);
    console.log({user});
    res.send(user);
  })

  router.get("/mentee-months", (req, res) => {
    const user = getUserFromSession(req.session);
    getMenteeMonths(db, user.user_id).then((month) => {
      res.send(month);
    });
  });

  router.get("/mentor-months", (req, res) => {
    const user = getUserFromSession(req.session);
    getMentorMonths(db, user.mentor_id).then((month) => {
      res.send(month);
    });
  });

  router.get("/mentor-card", (req, res) => {
    const monthId = req.query.month_id;
    const user = getUserFromSession(req.session);
    getMentorCard(db, monthId, user.user_id).then((mentor) => {
      res.send(mentor);
    });
  });

  router.get("/mentee-calls", (req, res) => {
    const monthId = req.query.month_id;
    const user = getUserFromSession(req.session);
    getMenteeCalls(db, monthId, user.user_id).then((calls) => {
      res.send(calls);
    });
  });

  router.post("/mentee-call", (req, res) => {
    const monthId = req.body.month_id;
    const dayOfMonth = req.body.day_of_month;
    const user = getUserFromSession(req.session);
    createMenteeCalls(db, monthId, user.user_id, dayOfMonth).then((calls) => {
      res.send(calls);
    });
  });

  router.post("/delete-mentee-call", (req, res) => {
    const callId = req.body.call_id;
    const user = getUserFromSession(req.session);
    deleteMenteeCalls(db, callId, user.user_id).then((calls) => {
      res.send(calls);
    });
  });

  router.get("/mentee-goals", (req, res) => {
    const monthId = req.query.month_id;
    const userId = req.query.user_id;
    const user = getUserFromSession(req.session);
    getMenteeGoals(db, monthId, userId || user.user_id, user.mentor_id).then((goals) => {
      res.send(goals.sort((a,b) => a.id - b.id));
    });
  });

  router.post("/mentee-goal-done", (req, res) => {
    const goalId = req.body.goal_id;
    const monthId = req.body.month_id;
    const isDone = req.body.is_done;
    const user = getUserFromSession(req.session);
    markGoalDone(db, isDone, goalId, user.user_id, monthId).then((goals) => {
      res.send(goals);
    });
  });

  router.post("/create-mentee-goal", (req, res) => {
    const userId = req.body.user_id;
    const monthId = req.body.month_id;
    const description = req.body.description;
    const user = getUserFromSession(req.session);
    createMenteeGoal(db, monthId, userId, user.mentor_id, description).then((goal) => {
      res.send(goal);
    });
  });

  router.get("/mentor-calls", (req, res) => {
    const monthId = req.query.month_id;
    const user = getUserFromSession(req.session);
    getMentorCalls(db, monthId, user.mentor_id).then((calls) => {
      res.send(calls);
    });
  });

  router.get("/student-cards", (req, res) => {
    const monthId = req.query.month_id;
    const user = getUserFromSession(req.session);
    getStudentCards(db, monthId, user.mentor_id).then((students) => {
      res.send(students);
    });
  });

  return router;
};
