name = 'Dirk'
age = 33
shoe_size = 45
info = f"Hi, my name is {name} and I am {age} years old. My shoe size is {shoe_size}"

#Three possible ways to print the same string

print(info)
print("Hi, my name is %s and I am %d years old. My shoe size is %d" % (name, age, shoe_size))
print(f"Hi, my name is {name} and I am {age} years old. My shoe size is {shoe_size}")