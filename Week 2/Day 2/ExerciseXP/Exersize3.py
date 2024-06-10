basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket)
print(basket.count("Apples"))

# basket.remove("Apples", "Apples", "Oranges", "Kiwi")
basket.clear()
print(basket)