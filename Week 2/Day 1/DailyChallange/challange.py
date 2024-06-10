User_Word = input("Please enter a string of 10 characters >>>")

if (len(User_Word) < 10):
    print ("String not long enough") 
elif (len(User_Word) > 10):
    print ("String too long")
else:
    print ("Perfect String")

    print(User_Word[0] + User_Word[9])

for letter in range(1, len(User_Word)+1):
        print(User_Word[0:letter])