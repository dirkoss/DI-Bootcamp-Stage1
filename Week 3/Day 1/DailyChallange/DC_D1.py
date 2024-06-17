# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# 1. Create a class called Farm. How should it be implemented?
# 2. Does the Farm class need an __init__ method? If so, what parameters should it take?
# 3. How many methods does the Farm class need?
# 4. Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# 5. Test your code and make sure you get the same results as the example above.
# 6. Bonus: nicely line the text in columns as seen in the example above. Use string formatting.


class Farm:
    def __init__(self, farm_name) -> None:
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal: str, amount = 1):
        if animal not in self.animals:
            self.animals.update({animal : amount})
        else:
            self.animals[animal] += amount

    def get_info(self) -> str:
        print(f"{self.name}'s farm \n")
        for key, value in self.animals.items():
            print(f"{key}: {value}")
        return "\n     E-I-E-I-0!"
    
    def get_animal_types(self) -> list:
        sorted_animals = []
        for animal in self.animals.keys():
            sorted_animals.append(animal)
            sorted_animals.sort()
        return sorted_animals

def get_short_info(self, animal_list: list) -> None:
        i = 0
        for value in self.animals.values():
                if value > 1:
                    animal_list[i] += "s"
                    i += 1
        for animal in animal_list:
            print(animal_list.index(animal))
            print(len(animal_list) - 1)
            if animal_list.index(animal) < len(animal_list) - 1:
                animal_list[animal_list.index(animal)] += ","
        animal_list.insert(-1, "and")
        with_and = " ".join(animal_list)
        print(f"{self.name}’s farm has {with_and}.")


def main():
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow',5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)
    print(macdonald.get_info())
    macdonald.get_short_info(macdonald.get_animal_types())

if __name__ == "__main__":
    main()