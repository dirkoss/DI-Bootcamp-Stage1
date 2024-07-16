# My favorite numbers

my_fav_numbers = {1, 2, 3, 4, 5}
add_fav_numbers = {6, 7}   
my_fav_numbers.update(add_fav_numbers)   
print(my_fav_numbers)
my_fav_numbers.remove(7)

# Friends favorite numbers

friend_fav_numbers = {11, 12, 13, 14, 15}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)