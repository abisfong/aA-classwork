PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
  -- foregin key needed
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  
  FOREIGN KEY (user_id) REFERENCES users(id)
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,


  FOREIGN KEY (parent_id) REFERENCES replies(id)
  FOREIGN KEY (question_id) REFERENCES questions(id)
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  
  FOREIGN KEY (user_id) REFERENCES users(id)
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO 
  users (fname, lname)
VALUES
  ('George', 'Miller'),
  ('Lyhour', 'Lay'),
  ('Abraham', 'Fong'); 

INSERT INTO
  questions (title, body, author_id)
VALUES
  ('Question 1 Title', 'Q1 Body', (SELECT id FROM users WHERE lname = 'Miller' AND fname = 'George')),
  ('Question 2 Title', 'Q2 Body', 2),
  ('Question 3 Title', 'Q3 Body', 3),
  ('Question 4 Title', 'Q4 Body', 2);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (1, (SELECT id FROM questions WHERE id = 2)),
  (1, 1),
  (2, 3),
  (3, 3);

INSERT INTO
  replies (question_id, parent_id, user_id, body)
VALUES
  (1, NULL, 2, 'a reply'),
  (2, NULL, 3, 'reply2'),
  (3, NULL, 1, 'reply3'),
  (3, 3 , 2, 'reply to reply3');

INSERT INTO
  question_likes (user_id, question_id)
VALUES
  (3,1),
  (2,1),
  (1,2);





