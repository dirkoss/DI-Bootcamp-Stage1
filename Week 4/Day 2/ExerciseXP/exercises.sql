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

-- 3.

