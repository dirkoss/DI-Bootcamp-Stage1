# Function is reusable code that can be called multiple times. It is defined using the def keyword followed by the function name and 
# containing any parameters. The function body is indented and contains the code to be executed when the function is called. Functions can return a value using the return keyword. Functions can also have default parameter values and keyword arguments. Functions can be imported from other modules using the import statement.

# def say_hello():
#     pass    
#     print("Hello World!")

# say_hello()

# # Argument

# def say_hello(name):
#     print(f"Hello, {name}!") 

# say_hello("Dirk")

def say_hello(username, language = "English"):
    if language == "English":
        print(f"Hello, {username}!")
    elif language == "Hebrew":
        print(f"Shalom, {username}!")
    else:
        print(f"Sorry there is no {language}!")

say_hello("Dirk", "Hebrew")
say_hello("Dirk", "Italiano")  # Positional Arguments
