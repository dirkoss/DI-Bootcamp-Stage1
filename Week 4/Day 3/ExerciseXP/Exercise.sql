1.

-- EXERCISE 1. 

SELECT name FROM language

-- EXERCISE 2.

SELECT film.title, film.description, language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

-- EXERCISE 3.

SELECT * FROM language

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
SELECT film.title, film.description
FROM film
JOIN film_actor on film.film_id = film_actor.film_id
JOIN actor on actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' and actor.last_name = 'Monroe' and film.description

SELECT film.title, film.description
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.length < 60 and film.rating = 'R' and category.name = 'Documentary'

SELECT film.title, film.description, rental.rental_date, rental.return_date
FROM film
inner JOIN inventory ON film.film_id = inventory.film_id
inner JOIN rental ON rental.inventory_id = inventory.inventory_id
inner JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew' 
AND customer.last_name = 'Mahan'
AND rental.return_date > '2005-07-28'  
AND rental.return_date < '2005-08-01'
AND film.rental_rate > 4.00

SELECT film.title, film.description,
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON customer.customer_id = rental.customer_id
WHERE film.title ilike '%boat%' or film.description ilike '%boat%'
AND customer.first_name = 'Matthew' 
and customer.last_name = 'Mahan'
order BY film.replacement_cost desc