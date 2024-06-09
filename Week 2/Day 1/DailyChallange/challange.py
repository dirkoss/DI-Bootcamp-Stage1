# Instructions

#     Using the input function, ask the user for a string. The string must be 10 characters long.
#         If it’s less than 10 characters, print a message which states “string not long enough”.
#         If it’s more than 10 characters, print a message which states “string too long”.
#         If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

#     Then, print the first and last characters of the given text.

#     Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

#     The user enters "HelloWorld"
#     Then, you have to construct the string character by character
#     H
#     He
#     Hel
#     ... etc
#     HelloWorld


User_Word = input("Please enter a string of 10 characters >>>")

if len(User_Word) < 10:
    print ("string not long enough") 
elif len(User_Word) > 10:
    print ("string too long")
else:
    print ("perfect string")

    print(User_Word[0] + User_Word[9])

for letter in range(1, len(User_Word) + 1):
        print(User_Word[0:letter])