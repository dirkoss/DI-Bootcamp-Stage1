
CREATE TABLE students(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (50) NOT NULL,
 birth_date DATE NOT NULL)


nd birth_date to the students table (Take a look at the id given).


INSERT INTO students (first_name, last_name, birth_date)
VALUES
('Marc','Benichou','1998-11-02'),
('Yoan','Cohen','2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-30')




SELECT * FROM students
SELECT last_name, first_name FROM students 
SELECT last_name, first_name FROM students WHERE id = 2
SELECT last_name, first_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
SELECT last_name, first_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a%'
SELECT last_name, first_name FROM students WHERE first_name ILIKE 'a%'
SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a'
SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a_'
SELECT last_name, first_name FROM students WHERE id = 3 AND id = 1
SELECT * FROM students WHERE birth_date => '2000-01-01';        