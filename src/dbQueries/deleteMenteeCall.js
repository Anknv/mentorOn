exports.deleteMenteeCalls = (db, callId, userId) => {
  const queryString = `
    DELETE FROM calls
    WHERE id = $1 AND session_id IN(SELECT id FROM sessions WHERE user_id = $2)
  `;

  return db.query(queryString, [callId, userId]).then((res) => res.rows);
}
