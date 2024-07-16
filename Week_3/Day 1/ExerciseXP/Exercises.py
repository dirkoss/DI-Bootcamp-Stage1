# EXERCISE 1
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:
    def __init__(self, cat_name: str, cat_age: int):
        self.name = cat_name
        self.age = cat_age

Cat1 = Cat("Tom", 5)
Cat2 = Cat("Jerry", 3)
Cat3 = Cat("Garfield", 7)

def oldest_cat():
    oldest = Cat1
    if Cat2.age > oldest.age:
        oldest = Cat2
    if Cat3.age > oldest.age:
        oldest = Cat3
    return oldest


print(f"The oldest cat is {oldest_cat().name}, and is {oldest_cat().age} years old.")


# EXERCISE 2
# 1. Create a class called Dog.
# 2. In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# 3. Create a method called bark that prints the following string “<dog_name> goes woof!”.
# 4. Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# 5. Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# 6. Print the details of his dog (ie. name and height) and call the methods bark and jump.
# 7. Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# 8. Print the details of her dog (ie. name and height) and call the methods bark and jump.
# 9. Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog :
    def __init__(self, name: str, height: int):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")

    
davids_dog = Dog("Rex", 50)
print(f"{davids_dog.name} is {davids_dog.height} cm high")

sarahs_dog = Dog("Teacup", 20)
print(f"{sarahs_dog.name} is {sarahs_dog.height} cm high")

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger")


# EXERCISE 3
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics: str):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()


# EXERCISE 4
# 1. Create a class called Zoo.
# 2. In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# 3. Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# 4. Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# 5. Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# 6.Create a method called get_groups that prints the animal/animals inside each group.
# 7. Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example

class zoo:
    def __init__(self, zoo_name: str):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()

    def get_groups(self):
        self.sort_animals()
        animals_dict = {}
        for animal in self.animals:
            if animal[0] not in animals_dict:
                animals_dict[animal[0]] = [animal]
            else:
                animals_dict[animal[0]].append(animal)
        print(animals_dict)

ramat_gan_safari = zoo("Ramat Gan Safari")



