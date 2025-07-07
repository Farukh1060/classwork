
list1 =["apple","banana","mangoo","grapes"]

def myfunction(list1):
    for x in list1:
        if x.startswith("a"):
            print(x)
        else:
            pass
myfunction(list1)
# check = filter(function,list1)
# print(list(check))