exports.getMentorCalls = (db, monthId, mentorId) => {
  const queryString = `
    SELECT * FROM calls
    WHERE session_id IN (
      SELECT id FROM sessions
      WHERE month_id = $1 AND mentor_id = $2
    )
  `;

  return db.query(queryString, [monthId, mentorId]).then((res) => res.rows);
}
