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