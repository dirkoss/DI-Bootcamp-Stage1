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