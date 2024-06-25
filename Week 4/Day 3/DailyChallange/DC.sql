-- 1.

CREATE TABLE Customer(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) not NULL,
	last_name VARCHAR (50) not NULL
);

CREATE TABLE Customer_Profile (
	id SERIAL PRIMARY KEY,
	is_logged_in BOOLEAN DEFAULT false,
	id INT references Customer(id) ON DELETE NOT NULL UNIQUE 
 );

-- 2.

INSERT INTO Customer(first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

3. 

INSERT INTO Customer_Profile(is_logged_in, id)
VALUES
(true, (SELECT id from Customer where first_name = 'John')),
(false, (SELECT id from Customer where first_name = 'Jerome'))

4.

SELECT Customer.first_name, Customer_Profile.is_logged_in
FROM Customer_Profile
INNER JOIN Customer ON Customer.id = Customer_Profile.id WHERE is_logged_in = true

5. 

SELECT Customer.first_name, Customer_Profile.is_logged_in
FROM Customer_Profile
FULL OUTER JOIN Customer ON  Customer.id = Customer_Profile.id

6. 

SELECT  COUNT (Customer_Profile.is_logged_in)
FROM Customer_Profile
WHERE is_logged_in = false


-- II. 

-- 1.

CREATE TABLE book (
id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
author VARCHAR(50) NOT NULL
)

-- 2.

INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

-- 3.

CREATE TABLE student (
id SERIAL PRIMARY KEY, 
name VARCHAR(100) NOT NULL UNIQUE, 
age INT NOT NULL CHECK (age <= 15)
)

-- 4. 

INSERT INTO student (name, age)
VALUES('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

-- 5. 

CREATE TABLE library ( 
id int references book(id) ON DELETE CASCADE ON UPDATE CASCADE, 
student_id IN REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE,
borrowed_date DATE NOT NULL,
PRIMARY KEY (book_fk_id, id)
)

-- 6. 

INSERT INTO library (book_fk_id, id, borrowed_date)
VALUES 
((SELECT id from book where title = 'Alice In Wonderland'), (SELECT id from student where name = 'John'), '2022-02-15'),
((SELECT id from book where title = 'To kill a mockingbird'), (SELECT id from student where name = 'Bob'), '2021-03-03'),
((SELECT id from book where title = 'Alice In Wonderland'), (SELECT id from student where name = 'Lera'), '2021-05-23'),
((SELECT id from book where title = 'Harry Potter'), (SELECT id from student where name = 'Bob'), '2021-08-12')


-- 7.

SELECT * from library

SELECT student.name, book.title, library.borrowed_date
FROM library
JOIN book 
ON book.id = library.book_fk_id
JOIN student 
ON student.id = library.id;

SELECT avg(student.age)
FROM library
JOIN book
ON book.id = library.book_fk_id
JOIN student 
ON student.id = library.id 
WHERE book.title = 'Alice In Wonderland'

DELETE FROM student WHERE name = 'Bob';
SELECT student.name, book.title, library.borrowed_date
FROM library
JOIN book 
ON book.id = library.book_fk_id
JOIN student 
ON student.id = library.id;