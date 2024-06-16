# EXERCISE 1
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

import random


def display_message():
    print("Learning Python in this course.")

display_message()

# EXERCISE 2
# 1. Write a function called favorite_book() that accepts one parameter called title.
# 2. The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# 3. Call the function, make sure to include a book title as an argument when calling the function

def favorite_book(book_title):
    print(f"One is my favorite books is {book_title}")

favorite_book("Red Notice by Bill Browder")

# EXERCISE 3
# 1. Write a function called describe_city() that accepts the name of a city and its country as parameters.
# 2. The function should print a simple sentence, such as "<city> is in <country>".
# 3. For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# 4. Call your function.

def describe_city(city, country ='Netherlands'):
    print(f"{city} is in {country}.")

describe_city('Amsterdam')

# EXERCISE 4
# 1. Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def numberGame(Number2 = random.randint(1, 100)):
   Number2 = random.randint(1, 100)
   if Number2 > Number2:
       print (f"Your number is {Number2}, the computer has {Number2} You win")
   else:
       print (f"Your number is {Number2}, the computer got {Number2} You lose")


# EXERCISE 5
# 1. Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# 2. The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# 3. Call the function make_shirt().

# 4. Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# 5. Call the function, in order to make a large shirt with the default message
# 6. Make medium shirt with the default message
# 7. Make a shirt of any size with a different message.

def make_shirt(size = "Large", text = "I Love Python"):
    return f"The size of the shirt is {size} and the text is {text}"

print(make_shirt())
print(make_shirt("M"))
print(make_shirt(text = "I am Dirk", size = "M"))


# def make_shirt(size, printed_message):
#     print(f"The size of the shirt is {size}, and the printed message is {printed_message}")

# EXERCISE 6
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# 1. Create a function called show_magicians(), which prints the name of each magician in the list.
# 2. Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# 3. Call the function make_great().
# 4. Call the function show_magicians() to see that the list has actually been modified.

magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]

def show_magicians():
    for name in magician_names:
        print(name)

def make_great():
    for i in range(len(magician_names)):
        magician_names[i] += " the Great"

show_magicians()
make_great()
show_magicians()

# EXERCISE 7

def get_random_temp():
    min = -10
    max = 40
    generated = random.randint(min, max)
    return generated

print(get_random_temp())

def main():
    generated_temp = get_random_temp()
    print(f"The temperature right now is {generated_temp} degrees Celcius")

    if(generated_temp < 0):
        print("Brrr, that's freezing today")
    elif(generated_temp < 16):
        print("Quite Chilly! Don't forget your coat")
    elif(generated_temp < 24):
        print("A bit cold out there!")
    elif(generated_temp < 32):
        print("pretty warm outside. A shirt is enough")
    elif(generated_temp < 40):
        print("It's really  HOT outside!")


def get_random_temp(season):
    seasons = {
        'winter' : (-20,5),
        'autumn' : (5,15),
        'spring' : (15,24),
        'summer' : (24,60)
     }
    min,max = seasons[season]
    generated = random.randint(min, max)
    return generated


# EXERCISE 8


# 1. Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# 2. Create a function that informs the user of his number of correct/incorrect answers.
# 3. Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.
