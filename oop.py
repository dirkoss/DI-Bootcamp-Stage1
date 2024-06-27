
class Employee:
    def __init__(self, firstname, lastname, age):
        self.first = firstname
        self.last = lastname
        self.age = age

    def full_name(self):
        return self.first + " " + self.last

Employee1 = Employee("John", "Doe", 25)

print(Employee1.full_name())
print(Employee1.age)