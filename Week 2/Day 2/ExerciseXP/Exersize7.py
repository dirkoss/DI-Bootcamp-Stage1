Fav_fruit = input("What is your favorite fruit? Please enter with space between each fruit: ")
Fav_fruit = Fav_fruit.split()
print(Fav_fruit)
Input_User = input("Please enter a fruit: ")

#Check fruit in Fav_fruit list, which was just created and have the output as suggested in the Exercise.
if Input_User in Fav_fruit: 
    print("You chose one of your favorite fruits! Enjoy!")
else: 
    print("You chose a new fruit. I hope you enjoy it!")  