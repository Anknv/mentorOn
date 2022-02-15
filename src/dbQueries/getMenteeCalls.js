exports.getMenteeCalls = (db, monthId, userId) => {
  const queryString = `
    SELECT * FROM calls
    WHERE session_id = (
      SELECT id FROM sessions
      WHERE month_id = $1 AND user_id = $2
    )
  `;

  return db.query(queryString, [monthId, userId]).then((res) => res.rows);
}
