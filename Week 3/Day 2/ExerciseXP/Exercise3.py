from exercise import Dog 
import random


class PetDog(Dog):
    def __init__(self, name: str, age: int | float, weight: int | float, trained: bool = False) -> None:
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dogNames: str) -> None:
        names = " ".join(dogNames)
        print(f"{self.name} {names} all play together")

    def doATrick(self) -> None:
        trick = random.randint(0,3)
        tricks = [f"{self.name} does a barrel roll", f"{self.name} stands on his back legs", f"{self.name} shakes your hand", f"{self.name} plays dead"]
        if self.trained:
            print(tricks[trick])

def main():
    rio = Dog("Rio", 15, 130)
    jeep = Dog("Jeep", 17, 140)
    sully = Dog("Sully", 20, 100)
    sabra = PetDog("Sabra", 12, 137)

    sabra.train()
    sabra.play(rio.name, jeep.name, sully.name)
    sabra.doATrick()


if __name__ == "__main__":
    main()