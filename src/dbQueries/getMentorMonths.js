exports.getMentorMonths = function(db, mentorId) {
  const queryString = `
    SELECT * FROM months
    WHERE (SELECT id FROM sessions WHERE mentor_id = $1 and month_id = months.id) IS NOT NULL;
  `;

  return db.query(queryString, [mentorId]).then(res => res.rows);
}
