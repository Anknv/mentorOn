DROP TABLE IF EXISTS sessions CASCADE;
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  mentor_id INTEGER REFERENCES mentors(id),
  month_id INTEGER REFERENCES months(id)
);
