Pizza_toppings_lst = []
while True:
    topping = input("Enter topping: (or quit to checkout) ")
    if topping == "quit" or topping == "Quit" or topping == "QUIT":
        break
    Pizza_toppings_lst.append(topping)
    print(f"You add {topping}")
print(Pizza_toppings_lst)
print(f"Total price - {10 + 1 * len(Pizza_toppings_lst)}")