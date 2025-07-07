tuple1 =("farukh","shaikh",27 ,True)
tuple2 =("be","mech",4 ,True)
list1 = [1,5,2,8,7]

tuple3 = tuple1 + tuple2
print(tuple1)
print(tuple3)

list_to_tuple = (tuple(list1))
print(list_to_tuple)

print("access items")
print(tuple1[0])
print(tuple1[-1])
print(tuple1[2:3])
print(tuple1[-3:-1])
print(tuple1[0::2])

# unpack tuple3 
(fname,lname,age,*info) = tuple3
print(fname)
print(lname)
print(info)
