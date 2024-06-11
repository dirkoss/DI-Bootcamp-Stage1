personal_information = {
    "name": "Dirk",
    "age": 30,
    "city": "Tel Aviv"
    }

# Looping trough keys
for key in personal_information:
    print(key)

# Looping trough values
for values in personal_information.values():
    print(values)

# Looping trough keys and values
for key, values in personal_information.items():
    print(key, values)
