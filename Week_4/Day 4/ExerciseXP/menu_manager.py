import psycopg2

DBNAME = "W4D4"
USER = "postgres"
PASSWORD = "kl;'"  
HOST = "localhost"
PORT = "5433"

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()


class MenuManager():
    def get_by_name(name):
        query = f"SELECT item_name FROM menu_items WHERE item_name = '{name}'"
        cursor.execute(query)
        results = cursor.fetchall()
        if len(results) < 1:
            return None
        elif name in results[0]:
            return name
            
    
def all_items():
    list_of_items = []
    query = f"SELECT item_name FROM menu_items"
    cursor.execute(query)
    results = cursor.fetchall()
    for value in results:
        list_of_items.append(value)
        return list_of_items
    
    all_items()