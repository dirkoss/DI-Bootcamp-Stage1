
numbers =[]
for i in range(100):
    numbers.append(i)
print(numbers)

# Element_to_store(i) for i in range(100)

numbers = [i for i in range(100)]
print(numbers)

numbers2 = [1, 2, 3, 4, 5]
numbers3 = [number*2 for number in numbers2]
print(numbers3)

letters_lower = ['a', 'b', 'c', 'd']
letters_upper = []

list2 = [letter.upper() for letter in letters_lower]
print(list2)