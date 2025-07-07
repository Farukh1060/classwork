list = ["apple","mango","banana"]
print("print list")
for x in list:
    print(x)

print("print list length")
for x in list:
    count=0
    for y in x:
        count+=1
    print(count)

print("print list search")

for x in list :
    if "b" in x:
        print(x)
print("print patten")

for x in range(1,6):
    for y in range(0,x):
        print("*",end="")  
    print("")