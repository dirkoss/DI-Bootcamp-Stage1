-- EXERCISE 1
-- 1. 
SELECT * FROM public.items
ORDER BY price 

-- 2.
SELECT * FROM items
WHERE price >79
ORDER BY price 

-- 3.

SELECT first_name, last_name FROM customer
ORDER BY last_name
LIMIT 3 

-- 4.

SELECT last_name FROM customer
ORDER BY last_name DESC

-- EXERCISE 2

-- 1.

SELECT * FROM public.customer

-- 2.

SELECT (first_name,  last_name) AS full_name FROM customer

-- OR

SELECT first_name || ' ' || last_name AS full_name FROM customer

-- 3.

SELECT DISTINCT create_date from customer

-- 4.

SELECT * from customer
ORDER BY last_name DESC

-- 5.

SELECT film_id, title, description, release_year, rental_rate FROM public.film
ORDER BY rental_rate ASC 

-- 6.

SELECT address, phone FROM public.address
WHERE district = 'Texas'

-- 7.

SELECT * FROM public.film
WHERE film_id IN ('15','150')

-- 8.

SELECT * FROM public.film
WHERE title = 'The Departed'

-- 9.

SELECT * FROM public.film
WHERE title ILIKE 'Th%'

-- 10.

SELECT * FROM public.film
WHERE replacement_cost = (SELECT MIN(replacement_cost) FROM film)
LIMIT 10

-- 11.

SELECT * FROM public.film
WHERE replacement_cost = (SELECT MIN(replacement_cost) FROM film)
LIMIT 10
OFFSET 10

-- 12.

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id;

-- 13.

SELECT * FROM film
WHERE (SELECT film.film_id, inventory.film_id
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id) = NULL

-- 14.

SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;






