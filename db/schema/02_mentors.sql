DROP TABLE IF EXISTS mentors CASCADE;
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  speciality TEXT,
  location VARCHAR(255) NOT NULL,
  language VARCHAR(255) NOT NULL
);
