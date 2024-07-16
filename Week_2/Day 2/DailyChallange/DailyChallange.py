
Number_Length = input("Enter a random number and the length of the desired sequence: ")

# Split the input into two parts and qualisify the string as two integers
Number_Length_Split = Number_Length.split(",")
Number = int(Number_Length_Split[0])
Lenght = int(Number_Length_Split[1])

Sequence = []
for i in range(1, Lenght + 1) :
    Sequence.append(Number * i)
print(Sequence)
