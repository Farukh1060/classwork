print("Q5 greatre and less than")
num1 = int(input("enter number 1: "))
num2 = int(input("enter number 2: "))

if num1>num2 :
    print("num1 is greater")
else:
    print("num2 is greater")

print("Q6 IS PRIME OR NOT")

prime = int(input("enter number to check prime: "))
if prime <1:
    print(f"{prime} not a prime number")
else:
    is_prime = True
    for x in range(2,prime):
        if prime % x ==0: 
            is_prime = False
            break


if is_prime :
    print(f"{prime} is a prime number")
else:
   print(f"{prime} not a prime number")  

print("Q7 find grad base on presentage")



grade= int(input("enter precentage: "))
if grade>=90:
    print("A garde")
elif grade>=80:
    print("B grade")
elif grade>=60:
    print("c grade")
elif grade>=40:
    print("D grade")
else:
    print("f grade")


age = int(input("enter age: "))
weight = int(input("enter weight: "))

if age>18:
    if weight>50:
        print("you can donate")
    else:
        print("you canot donate")
else:
    print("you canot donate")