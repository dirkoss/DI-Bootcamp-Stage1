# class MenuItem:
#     name = "Cheeseburger"
#     price = "5"

# def __init__(self, name, price):
#     self.name = name
#     self.price = price
    

import psycopg2

DBNAME = "W4D4"
USER = "postgres"
PASSWORD = "kl;'"  
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()

class MenuItem:
    def __init___(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price
        
def save(self):
        query = f"NSERT INTO menu_items (item_name, item_price) VALUES (%s, %s);"
        values = (self.item_name, self.item_price)
        cursor.execute(query, values)
        connection.commit()

def delete(self):
    query = f"DELETE FROM menu_items WHERE item_name = '{self.item_name}';"
    cursor.execute(query)
    connection.commit()
    
def update(self, item_name):
    query = f"UPDATE menu_items SET item_name = '{self.item_name}', item_price = '{self.item_price}' where item_name = '{item_name}';"
    cursor.execute(query)
    connection.commit()