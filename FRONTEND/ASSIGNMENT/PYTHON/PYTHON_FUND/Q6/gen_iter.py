def even_num():
    num = 2
    count = 0
    while count<10:
       yield num
       
       num+=2
       count+=1

x= even_num()
print(list(x))

# for x in even_num():
#     print(x)