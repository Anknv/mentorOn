exports.getStudentCards = (db, monthId, mentorId) => {
  const queryString = `
    SELECT
      name,
      email,
      image_url,
    FROM users
    JOIN sessions ON users.id = sessions.user_id
    WHERE month_id = $1 AND mentor_id = $2
  `;

  return db.query(queryString, [monthId, mentorId]).then((res) => {
    return res.rows[0];
  });
}
