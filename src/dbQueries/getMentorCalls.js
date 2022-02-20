exports.getMentorCalls = (db, monthId, mentorId) => {
  const queryString = `
    SELECT
      users.name as user_name,
      calls.id as call_id,
      calls.day_of_month,
      sessions.id
    FROM calls
    JOIN sessions ON calls.session_id = sessions.id
    JOIN users ON users.id = sessions.user_id
    WHERE session_id IN (
      SELECT id FROM sessions
      WHERE month_id = $1 AND mentor_id = $2
    )
    ORDER BY day_of_month ASC
  `;

  return db.query(queryString, [monthId, mentorId]).then((res) => res.rows);
}
