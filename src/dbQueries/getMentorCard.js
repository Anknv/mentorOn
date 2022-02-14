const getMentorCard = (db, monthId, userId) => {
  const queryString = `
    SELECT * FROM mentors
    JOIN users ON users.id = mentors.user_id
    WHERE mentors.id = (
      SELECT mentor_id FROM sessions
      WHERE month_id = $1 AND user_id = $2
    )
  `;

  return db.query(queryString, [monthId, userId]).then((res) => res.rows[0]);
}
