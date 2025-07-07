# without parameter
def fun():
    print("hellow world")

fun()

# with parameter
# without return
# sum of two num

def sum(num1,num2):
    print(num1 + num2)
sum(2,3)

# with return
def fulname (fname,lname):
    return(fname +" " + lname)

name = fulname("shaikh","farukh")
print(name)

# take number of arg
def add(*num):
    print(num)

add(2,5,4,4,6)

# lambda
x = lambda a :a+10
print(x(10))

x = lambda a,b :a*b
print(x(10,12))
