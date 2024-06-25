-- EXERCISE 1. 

SELECT name from language

-- EXERCISE 2.

SELECT film.title, film.description, language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

-- EXERCISE 3.

SELECT * from language

-- EXERCISE 4.

INSERT INTO new_film (name)
VALUES ('The Departed'),('Star Wars'), ('Troy'), ('RoboCop')
;

-- EXERCISE 5.

CREATE TABLE customer_reviews (
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INT references new_film(id) ON DELETE CASCADE,
language_id INT references language(language_id),
title VARCHAR(50),
score INT CHECK (score >= 0),
review_text text,
last_update date
);


-- EXERCISE 6.

