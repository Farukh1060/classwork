from functools import reduce
tuple1 = (1,2,3,4,5,5,6,6,7)

def function(x,y):
    return x+y

sum = reduce(function,tuple1)
print(sum)