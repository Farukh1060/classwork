list = ["apple","banana","mangoo"]


print("continue statement")
for x in list:
    if x == "banana":
        continue
    print(x)


print("break statement")

for x in list:
    if x == "banana":
        break
    print(x)