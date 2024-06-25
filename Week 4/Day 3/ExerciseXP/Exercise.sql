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


-- EXERCISE 6.

