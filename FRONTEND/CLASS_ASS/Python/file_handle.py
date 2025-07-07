# read file but file should already exist 
# file = open("text.txt","r")
# dt = file.read()
# file.close()
# print(dt)

# write file will creat file and write in it if file exist it will replace it 
# file = open("text.txt","w")
# dt = file.write("programing")
# file.close()
# print(dt)

# read file
# file = open("text.txt","r")
# dt = file.read()
# file.close()
# print(dt)


# append file in append mode
# file = open("text.txt","a")
# dt = file.write("programing")
# file.close()
# print(dt)

# read single line 
# file = open("text.txt","r")
# dt = file.readline()
# dt1 = file.readline()
# file.close()
# print(dt1)

# read multi line through loop
# file = open("text.txt","r")
# while True:
#     dt=file.readline()
#     print(dt)
#     if not dt:
#         break
# file.close()

# close file automaticle
# with open ("text.txt","r") as f:
#     dt = f.read()
#     print(dt)

# with open("travel-bag-4326730_1280.jpg","rb") as img:
#   dt = img.read()
# print (dt)



# with open("home.txt","w+") as writeread :
#     # print(writeread.tell())   tell where is cursour
#     writeread.write("hello")
#     writeread.seek(0) take the cursour to the position
#     dt = writeread.read()
#     print(dt)