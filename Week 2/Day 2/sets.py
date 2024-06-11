# Sets are like lists, but cannot be indexed. They are unordered and do not allow duplicates.
# Use sets when 
    # 1. All you need is a collection of unique elements.
    # 2. You don't care about the order of the elements.
    # 3. You don't need to access the elements by index.
    # 4. You don't need to access the elements by key.
    # 5. You don't need to access the elements by value.

lista = {1, 2, 3, 4, 5}
listb = {4, 5, 6, 7, 8}
listc = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4}

listd = listb.pop()
print(listd)

print(listc)    
print(lista.difference(listb))
print(listb.difference(lista))  

print(listb.intersection(lista))  
print(lista.union(listb))

#lookup = check if a value is in a set

print(1 in lista)   

a_tuple = (0, 20, 30, 40)
a, b, c, d = a_tuple

print(b)