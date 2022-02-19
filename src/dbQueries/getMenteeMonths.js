exports.getMenteeMonths = function(db, userId) {
  const queryString = `
    SELECT * FROM months
    WHERE (SELECT id FROM sessions WHERE user_id = $1 and month_id = months.id) IS NOT NULL;
  `;

  return db.query(queryString, [userId]).then(res => res.rows);
}
