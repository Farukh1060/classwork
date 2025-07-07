
dict1 ={
    "fname":"farukh",
    "lname":"shaikh",
    "age":28,
    "address":"surat",
    "pincode":"394210",
    "edu":"degree"

}
# # only key
# for x in dict1:
#     print(x)
# print()
# # only value
# for x in dict1:
#     print(dict1[x])
# print()
# # only key
# for x in dict1.keys():
#     print(x)
# print()
# # only value
# for x in dict1.values():
#     print(x)
# print()

# # for both
# for x,y in dict1.items():
#     print(x,y)
 

# two list to disct
key = ["apple","mango","grapes"]
value=["red","yellow","green"] 

newdict={}
newdict.update({key[0]:value[0]})

for x in range(len(key)):
    newdict.update({key[x]:value[x]})

print(newdict)

# count char

mystring = "hello world"
char = (set(mystring))
count= []
chardict={}


for x in char:
    chardict.update({x:mystring.count(x)})
    # print(x)
    # print(mystring.count(x))
       
print(chardict)   

      