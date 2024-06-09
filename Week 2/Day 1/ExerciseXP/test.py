# input("Write down number between 0 and 100 >>>")
# if int(input()) <0 or >100:
#     print("Fail")
# elif int(input()) = :
#     print("Fail")


user_number = input("write down number >>>")

user_number = int(user_number)

if user_number < 0 or user_number > 100:
    print("Fail")
elif user_number % 3 == 0:
    print("Fizz")
elif user_number % 5 == 0:
    print("Buzz")
elif user_number % 3 == 0 and user_number % 5 == 0:
    print("FizzBuzz")