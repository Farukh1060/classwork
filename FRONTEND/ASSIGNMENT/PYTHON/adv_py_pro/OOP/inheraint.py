# single inher
class uniperson :
    def __init__(self,n,a):
        self.name = n
        self.age = a
    def makeattandence(self):
        print("present")
    def leaveapp (self):
        print("leaveapplication")

class Teacher(uniperson):  #hierarchical inher

    def __init__(self, n, a,s):
        super().__init__(n, a)
        self.salary = s

    def uplodetest(self):
        print("test uplode")
    
    def leaveapp(self):                     #method override child override parant
        print("teacher leave app")
        super().leaveapp()               #parant application both can be use 


class Student(uniperson):  #hierarchical inher

    def uplodeans(self):
        print("anser uplode")

class clerk(uniperson) :   #hierarchical inher 
    def uplodedata ():
        print("uplode data")

techet1=Teacher("teacher name",30,30000)
techet1.makeattandence()
techet1.leaveapp()
print(techet1.name)

# multilevel
class Animal:
    def eat(self):
        print("eat..")
#multilevel
class Bird(Animal) :
    def fly(self):
        print("fly...")

class Eagle(Bird):
    def bride(self):
        print("eagle bride")

b = Bird()
b.eat()
b.fly()

e= Eagle()
e.bride()
e.eat()
e.fly()


# mutlipel

class Animal:
    def eat(self):
        print("eat..")

class Bird:
    def fly(self):
        print("fly...")

class Eagle(Animal,Bird):    #multiple
    def bride(self):
        print("eagle bride")

b = Bird()
# b.eat() 
b.fly() 

e= Eagle()
e.bride()
e.eat()
e.fly()




