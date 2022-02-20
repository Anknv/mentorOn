exports.getMentorMonths = function(db, mentorId) {
  const queryString = `
    SELECT months.id, month, year FROM months
    JOIN sessions ON months.id = sessions.month_id
    WHERE mentor_id = $1 AND month_id = months.id
    GROUP BY year, month, months.id
    ORDER BY months.id ASC
  `;

  return db.query(queryString, [mentorId]).then(res => res.rows);
}
