# A float is a number that has a decimal point and an integer is a number that does not have a decimal point (rounded off to the lowest whole number).
my_list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

list_Dirk = []
start = 1.5
while (start<=5):
    if(start.is_integer()):
        start = int(start)
    list_Dirk.append(start)
    start+=0.5
print(list_Dirk)

list_Dirk2 = []
start = 3
end = 10
for i in range(start,end + 1):
    item = i/2
    if(item.is_integer()):
        item = int(item)
    list_Dirk2.append(item)
print(list_Dirk2)