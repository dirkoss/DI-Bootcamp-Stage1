from menu_item import MenuItem
from menu_manager import MenuManager
import psycopg2

import psycopg2


DBNAME = "W4D4"
USER = "postgres"
PASSWORD = "kl;'"  
HOST = "localhost"
PORT = "5433"

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()

def show_user_menu():
    user_input = input( f'''Welcome choose from the following options: 
    View an Item (V)
    Add an Item (A)
    Delete an Item (D)
    Update an Item (U)
    Show the Menu (S)
    type in anything else to exit
                       ''')
    final_input = user_input.upper()
    if final_input == "V":
        item_input = input("Please input the item you want to view:")
        item = MenuManager.get_by_name(item_input)
        if item == None:
            print("We don't have that item in our menu.")
        else:
            print(f"Heres the item you have requested: {item}")
    elif final_input == "A": 
        add_item_to_menu()
    elif final_input == "D":
        remove_item_from_menu()
    elif final_input == "U":
        update_item_from_menu()
    elif final_input == "S":
        show_restaurant_menu()
    else: 
        item = MenuManager.all_items()
        print("Alright see you next time")
        for i in item:
            print(i)
        return 0
def add_item_to_menu():
    newItem = input("please input the item you  to add: ")
    newPrice = input("The price of the item is")
    newItem.strip()
    newPrice.strip()
    if newPrice.isdigit() == True: 
        item_to_add = MenuItem(newItem, int(newPrice))
        item_to_add.save()
        print (f"we added {newItem} with a price of {newPrice}")
    else:
        print("That's not a valid price")
def remove_item_from_menu():
    newItem = input("Input the item you want to remove from the menu")
    newItem.strip() 
    item_to_remove = MenuItem(newItem, 0)
    try:
        item_to_remove.delete()
    except:
        print("Error: item not found in the menu")
    else:
        print (f"The item {newItem} has been removed from the menu.")
        
        
def update_item_from_menu():
    oldItem = input("The item you want to update is")
    newItem = input("The new item is:")
    newPrice = input("The new price is:")
    oldItem.strip()
    newItem.strip()
    newPrice.strip()
    if newPrice.isdigit() == True: 
        item_to_add = MenuItem(newItem, int(newPrice))
        item_to_add.update(oldItem)
        print (f"The item {oldItem} has been updated to {newItem} with a price of {newPrice}")
    else:
        print("That's not a valid price")
def show_restaurant_menu():
    item = MenuManager.all_items()
    print("This is the menu:")
    for i in item:
        print(i)
    
while True:
    run = show_user_menu()
    if run == 0:
        break