exports.createMenteeGoal = (db, monthId, userId, mentorId, description) => {
  const queryString = `
    INSERT INTO goals (session_id, description)
    VALUES ((
      SELECT id FROM sessions
      WHERE month_id = $1 AND mentor_id = $2 AND user_id = $4
    ), $3)
  `;

  return db.query(queryString, [monthId, mentorId, description, userId]).then((res) => res.rows);
}
