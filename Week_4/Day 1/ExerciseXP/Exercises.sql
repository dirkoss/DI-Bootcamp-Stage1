CREATE TABLE items(
 id SERIAL PRIMARY KEY,
 Product VARCHAR (50) NOT NULL,
 Price SMALLINT NOT NULL
)

CREATE TABLE customer(
 id SERIAL PRIMARY KEY,
 First_Name VARCHAR (50) NOT NULL,
 Last_Name VARCHAR (50) NOT NULL
)

INSERT INTO items (Product, Price)
VALUES('Small Desk', 100),
('Large Desk', 300),
('fan', 80);

INSERT INTO customer (First_Name, Last_Name)
VALUES('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * from items

SELECT * FROM items
WHERE Price > 80

SELECT * FROM items
WHERE Price < 301

SELECT * FROM customer
WHERE Last_Name = 'Smith'

SELECT * FROM customer
WHERE Last_Name = 'Jones'

SELECT * FROM customer
WHERE last_name NOT = 'Scott'