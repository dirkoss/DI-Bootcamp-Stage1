age_str = input(
    "Enter age (separate with a single space): "
)
ages = age_str.split(" ")
print(ages)
ages = [int(age) for age in ages]
price = 0
for age in ages:
    if 3 <= age <= 12:
        price += 10
    elif age > 12:
        price += 15
print(f"Total costs: {price}")

teen_list = ["Jon", "Greg", "Bob"]
teen_final = teen_list.copy()
for teen in teen_list:
    if int(input(f"How you old, {teen}: ")) < 16:
        teen_final.remove(teen)
print(teen_final)