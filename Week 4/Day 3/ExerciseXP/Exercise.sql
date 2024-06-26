1.

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
score INT CHECK (score >= 0 or score <= 10),
review_text text,
last_update date
);


-- EXERCISE 6.

INSERT INTO customer_reviews(film_id, language_id, title, score, review_text, last_update)
VALUES ((SELECT id from new_film WHERE name ILIKE 'The Departed'), (SELECT language_id FROM language WHERE name ILIKE 'english'), 'Excellent movie', 9, 'Great suspense, awesome acting, overall great', '2024-06-25')
VALUES ((SELECT id from new_film WHERE name ILIKE 'Star Wars'), (SELECT language_id FROM language WHERE name ILIKE 'english'), 'Not for me', 5, 'Fantasy and over the top', '2024-06-25') 

-- EXERCISE 7

DELETE from new_film where id = 2;
The movie(review) Star Wars was deleted from both tables

2.

-- EXERCISE 1. 

UPDATE film set language_id = 2  where title = 'Academy Dinosaur';
UPDATE film set language_id = 2  where title = 'Ace Goldfinger';

-- EXERCISE 2.

customer_address_id_fkey
Insertions must be equal to some value in the corresponding parent key of the parent table

-- EXERCISE 3. 

The Query should be DROP TABLE customer_reviews, however the TABLE customer_reviews contains foreign keys, referencing
to other TABLES

-- EXERCISE 4. 

SELECT COUNT (rental_id) FROM rental

-- EXERCISE 5. 

SELECT TOP(30) rental_id from rental WHERE (SELECT MAX(replacement_cost) FROM film)

-- EXERCISE 6. 

1. 
SELECT title FROM film WHERE description ILIke (%sumo%) and film_id = (SELECT film_id FROM film_actor WHERE actor_id) = (SELECT actor_id FROM actor WHERE last_name = 'Monroe')
