import psycopg2

DBNAME = "postgres"
USER = "postgres"
PASSWORD = "kl;'"  
HOST = "localhost"
PORT = "5433"

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()

cursor.execute("CREATE TABLE Countries (id serial primary key, name VARCHAR(50), capital VARCHAR(50), flag VARCHAR(100), subregion VARCHAR(50), population INT)")
