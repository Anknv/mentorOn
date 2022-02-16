exports.markGoalDone = (db, isDone, goalId, userId, monthId) => {
  const queryString = `
    UPDATE goals
    SET is_done = $1
    WHERE id = $2 AND session_id IN(SELECT id FROM sessions WHERE user_id = $3 AND month_id = $4)
  `;

  return db.query(queryString, [isDone, goalId, userId, monthId]).then((res) => res.rows);
}
