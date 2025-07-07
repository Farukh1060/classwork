
# try : #will try block of code
#     x=2/0
#     print(x)
# except NameError: # specific erro we nkow
#     print("name err")
# except: # handle any error ocour in try block
#     print("err")
# else : #exectte when no err occour
#     print("no err")
# finally:
#     print("exeute every time")


def calci():
 try:
        x= int(input("enter x :"))
        y= int(input("enter y :"))
        o= input("enter operater:")
        if o == "+":
          print(x+y)
        elif o ==  "-":
            print(x-y)
        elif o == "/":
            print(x/y)
        else:
            print("wrong")
        
 except Exception as e:
      print(e)

calci()
    




