
dict1 ={
    "fname":"farukh",
    "lname":"shaikh",
    "age":28,
    "address":"surat",
    "pincode":"394210",
    "edu":"degree"

}

print(dict1["fname"])  #access
print(dict1.get("edu")) #access by get method
print(len(dict1))

# to get key
print(dict1.keys())

# to get value
print(dict1.values())

# to get ken and value (items)
print(dict1.items())

# to change value or updte dict
dict1["age"]=25
dict1["country"] = "india"
dict1.update({"pincode":"394222"})
print(dict1)

# to remove items
dict1.pop("lname")
print(dict1)

# popitems will remove items from last
dict1.popitem()
print(dict1)

# del items
del dict1["edu"]
print(dict1)

# clear will the dict
dict1.clear()
print(dict1)

