#Player

#Attributes

## name: str
## health: int | float
## strength: int | float

#Methods
## attack() 
## defend() 

class GameCharacter:
    def __init__(self, player_name, player_health, player_strength):  # Initializer
        self.name = player_name #self refers to the instance of the class, obeject itself, refers to the object
        self.health = player_health
        self.strength = player_strength

    def attack(self):
        print(f"{self.name} is attacking with a strength of {self.strength}")

    def defend(self, enemy_attack):
        self.health -= enemy_attack * 0.1
        print(f"{self.name} is defending with a health of {self.health}")

def main() -> None:

    player1 = GameCharacter("Dirk", 100, 50)

    print (f"Player name: {player1.name}, Health points: {player1.health}, Strength: {player1.strength}")

    if __name__ == "__main__":
        main()