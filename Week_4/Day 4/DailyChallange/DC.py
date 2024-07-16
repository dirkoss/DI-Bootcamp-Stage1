import psycopg2
import requests
import json

DBNAME = "Countries"
USER = "postgres"
PASSWORD = "kl;'"  
HOST = "localhost"
PORT = "5433"


connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()


response = requests.get("https://restcountries.com/v3.1/all") 
print(response.status_code)
to_json = response.json()


cursor.execute("CREATE TABLE Countries (id serial primary key, name VARCHAR(50), capital VARCHAR(50), flag VARCHAR(100), subregion VARCHAR(50), population INT)")
def add_item(name, capital, flag, subregion, population):
    query = f"INSERT INTO Countries (name, capital, flag, subregion, population)
VALUES ('{name}', '{capital}', '{flag}', '{subregion}', {population});"
    cursor.execute(query)
    

add_item(to_json[0]['name']['common'], to_json[0]['capital'][0], to_json[0]['flag'], to_json[0]['subregion'], to_json[0]['population'])