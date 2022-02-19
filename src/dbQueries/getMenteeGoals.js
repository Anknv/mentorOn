exports.getMenteeGoals = (db, monthId, userId, mentorId) => {
  const queryString = `
    SELECT * FROM goals
    WHERE session_id = (
      SELECT id FROM sessions
      WHERE month_id = $1 AND user_id = $2 ${mentorId ? 'AND mentor_id = $3' : ''}
    )
  `;

  const queryArgs = [monthId, userId];
  if (mentorId) {
    queryArgs.push(mentorId);
  }

  return db.query(queryString, queryArgs).then((res) => res.rows);
}
