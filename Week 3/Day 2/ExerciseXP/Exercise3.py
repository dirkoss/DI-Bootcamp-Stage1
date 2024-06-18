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
    Dirk = Dog("Hans", 20, 100)
    Dirk2 = Dog("Kees", 21, 102)
    Dirk3 = Dog("Peter", 22, 102)

    print(Dirk.fight(Dirk2))
    print(Dirk.fight(Dirk3))
    print(Dirk2.fight(Dirk3))

if __name__ == "__main__":
    main()