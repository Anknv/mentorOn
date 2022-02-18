exports.createMenteeGoal = (db, monthId, mentorId, description) => {
  const queryString = `
    INSERT INTO goals (session_id, description)
    VALUES ((
      SELECT id FROM sessions
      WHERE month_id = $1 AND mentor_id = $2
    ), $3)
  `;

  return db.query(queryString, [monthId, mentorId, description]).then((res) => res.rows);
}
