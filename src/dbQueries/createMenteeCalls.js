exports.createMenteeCalls = (db, monthId, userId, dayOfMonth) => {
  const queryString = `
    INSERT INTO calls (session_id, day_of_month)
    VALUES ((
      SELECT id FROM sessions
      WHERE month_id = $1 AND user_id = $2
    ), $3)
  `;

  return db.query(queryString, [monthId, userId, dayOfMonth]).then((res) => res.rows);
}
