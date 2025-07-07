List1=["apple","mango","banana","watermelon"]
List1.insert(2,"grapes")   #insert add item at specific index without replacing anoter item
print(List1)

List1.append("orange")  # add item at the end of list
print(List1) 


list2= ["red","yellow","yellow-green","green"]  # to add list to another list use extend
#extend is use to add any iterable object like tuple sets dict  at the end od list or ...

List1.extend(list2)
print(List1) 

List1.remove("green")  # remove is ude to remove specfic items it ther is more than one value it will remove first 
print(List1) 

List1.pop(1)  # remove from specific index if does not giv index remove from last
print(List1) 


del List1[0]   # delete from specific index and also delete the list if index is not given
print(List1) 

List1.clear()  # clear is use to empty list 
print(List1) 