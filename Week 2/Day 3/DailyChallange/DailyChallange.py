# CHALLANGE 1

# 1. Ask a user for a word
#     Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

#     Make sure the letters are the keys.
#     Make sure the letters are strings.
#     Make sure the indexes are stored in a list and those lists are values.

userInput = input("Enter a word: ")
Word = {}
Word2 = 0
for char in userInput:
    if char in Word:
        Word[char] += [Word2]
    else:
        Word[char] = [Word2]
    Word2 += 1
print(Word)


# CHALLANGE 2

# 1. Create a program that prints a list of the items you can afford in the store with the money you have in your Wallet.
#     Sort the list in alphabetical order.
#     Return “Nothing” if you can’t afford anything from the store.
#     Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

Items = {
  "Eggs": "1",
  "Honey": "10",
  "Milk": "5",
}
indx = 0
Money_Wallet = []
Wallet = "300"

for char in Wallet:
    if char.isdigit() == False:
        Wallet = Wallet.replace(char, "")
Wallet = int(Wallet)


for key in Items:
    for value in Items.values():
        for char in value:
            if char.isdigit() == False:
                Items[key] = Items[key].replace(char, "")


for key in Items:
    Items[key] = int(Items[key])
    if Items[key] < Wallet:
        Money_Wallet.append(key)
if len(Money_Wallet) == 0:
    print("Broke")
else:
    Money_Wallet.sort()
    print(Money_Wallet)