# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# 1. Create a class called Farm. How should it be implemented?
# 2. Does the Farm class need an __init__ method? If so, what parameters should it take?
# 3. How many methods does the Farm class need?
# 4. Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# 5. Test your code and make sure you get the same results as the example above.
# 6. Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def get_animal_types(self):
        animal_types = []
        for animal in self.animals:
            if animal['type'] not in animal_types:
                animal_types.append(animal['type'])
        return sorted(animal_types)

    def get_short_info(self):
        animal_types = self.get_animal_types()
        if len(animal_types) > 1:
            animal_types[-1] = animal_types[-1] + 's'
        return f"{self.name} has {', '.join(animal_types)}."
    
farm = Farm("McDonald's farm")
    print(macdonald.get_info())
'









# 7. Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

# 8. Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.