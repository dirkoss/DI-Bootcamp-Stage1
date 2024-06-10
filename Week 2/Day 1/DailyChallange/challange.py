User_Word = input("Please enter a string of 10 characters >>>")

if (len(User_Word) < 10):
    print ("String not long enough") 
elif (len(User_Word) > 10):
    print ("String too long")
else:
    print ("Perfect String")
    first_char = User_Word[0]
    last_char = User_Word[-1]

    print("The first character is: " + first_char)
    print("The last character is: " + last_char)

    for i in range(1, len(User_Word)+1):
        print(User_Word[:i])