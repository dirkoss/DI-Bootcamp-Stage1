name = 'Dirk'
age = 33
shoe_size = 45
info = f"Hi, my name is {name} and I am {age} years old. My shoe size is {shoe_size}"   # I do not understand the syntax=error of this line


#Three possible ways to print the same string

print(info)
print("Hi, my name is %s and I am %d years old. My shoe size is %d" % (name, age, shoe_size))
print("Hi, my name is {} and I am {} years old. My shoe size is {}".format(name, age, shoe_size))