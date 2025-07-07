
def add(func):
    def wrap(*a):
        sum=0
        for i in a:
            sum+= i
        print("addition is : ",sum)
    return wrap

@add
def result (a,b):
    print("add colling")

result(10,20)

# @multy 
# def result (a,b):
#     print("multi")