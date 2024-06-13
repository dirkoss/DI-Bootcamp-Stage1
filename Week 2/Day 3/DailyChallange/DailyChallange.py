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

# 1. Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
#     Sort the list in alphabetical order.
#     Return “Nothing” if you can’t afford anything from the store.
#     Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)