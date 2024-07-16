#add

personal_information_dirk = {
    "name": "Dirk",
    "age": 30,
    "city": "Tel Aviv"
    }

personal_information_dirk["phone_number"] = "+97255943054"
print(personal_information_dirk)

addtional_personal_information_dirk = {"Birthday": "01/01/1991", "Favourite Fruit": "Kiwi"}

personal_information_dirk.update(addtional_personal_information_dirk)
print(personal_information_dirk)

