player = "Dirk"

player_strength = 50
player_health = 100

def attack(player, player_strength):
    print(f"Player {player} is attacking with a strength of {player_strength}")
    return player_strength

def defend(player, player_health, enemy_attack):
    player_health -= enemy_attack * 0.1 #multiply by 0.1 to reduce the damage by 90%
    print(f"Player {player} is defending with a health of {player_health}")
    
    return player_health

attack(player, player_strength)
defend(player, player_health, 20)