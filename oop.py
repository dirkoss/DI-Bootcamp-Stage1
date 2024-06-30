
class Employee:
    def __init__(self, firstname, lastname, age):
        self.first = firstname
        self.last = lastname
        self.age = age

    def full_name(self):
        return self.first + " " + self.last


Employee1 = Employee("John", "Doe", 25)
Employee2 = Employee("Jane", "Doe", 30)


print(Employee.full_name(Employee1))
print(Employee1.full_name())
print(Employee1.age)



# Output:
