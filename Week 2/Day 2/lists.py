# List = Array

# a_list = [1, 2, 3, 4, 5, [1, 2, 3]]
# inner_list = a_list[-1]
# print(inner_list)
# print(inner_list[0])
# # print(len(a_list))
# # print(a_list[4])

# numbers = [1, 2, 3, 4, 5]

# sum = 0 
# for number in numbers:
#     sum += number   

# print(sum)

list1 = [5, 10, 15, 20, 25, 50, 20]

for i in range(len(list1)):
    if list1[i] == 20:
        list1[i] = 200
        print(list1)
        break
