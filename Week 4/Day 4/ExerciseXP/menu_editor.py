from menu_item import MenuItem
from menu_manager import MenuManager
import psycopg2

import psycopg2


DBNAME = "W4D4"
USER = "postgres"
PASSWORD = "root"  
HOST = "localhost"
PORT = "5432"


connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()

