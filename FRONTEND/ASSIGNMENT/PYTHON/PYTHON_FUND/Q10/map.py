list1 = ["apple","banana","mango","grapes"]
tuple1 = ("red","yello","sweet yello","green")
num =[1,2,3,4,5,6,7,9]

def function(num):
    return num*2
duble = map(function,num)

print(list(duble)) 

def join(list1,tuple1):
    return list1+" " + tuple1
mix = map(join,list1,tuple1)
print(list(mix))