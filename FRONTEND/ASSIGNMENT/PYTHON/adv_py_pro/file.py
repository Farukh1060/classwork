# f = open("file_open.txt","r") #if no such file exist then rise an error so first write
# file = open("filewrite.txt","w")
# file.write("replace content")
# file.close()

# file = open("filewrite.txt") # by default read mode
# data = file.read()
# print(data)
# file.close()


# file = open("filewrite.txt","a") # by default read mode
# file.writelines( " add apend content")
# file.close()

# file = open("filewrite.txt") # by default read mode
# data = file.read(10)# show first 10caracter
# print(data)
# file.close() 

# file = open("filewrite.txt") # by default read mode
# # data = file.readline()
# data1 = file.readlines()

# # print(data)
# print(data1)
# file.close() 

# file = open("filewrite.txt")
# for x in file:
#     print(x)

# file = open("filewrite.txt","w") 
# file.writelines([ " add apend content.\n"," add from write lines method.\n","done!. \n"])
# file.close()

# file = open("filewrite.txt")
# print(file.read())
# file.close()

# file = open("filewrite.txt","r+") #read + wright 
# data = file.read()   #first read curser will start from 0 position to last and read content and after this will wight content
# print(data)
# file.write("read and wrighr r+") # then  write
# file.close()


# file = open("filewrite.txt","r") # by default read mode
# file.seek(10) # take courser to the point
# print(file.tell())# tell where is cursour
# data = file.read()
# print(file.tell())
# print(data)
# file.close() 


# with open("filewrite.txt","w+") as file : #useing with file auto close
#  file.write("new content added old replace") #corsour will be at last point so direct read will show nothing

#  file.seek(0)

#  data = file.read()
#  print(data)


# with open("datajson.txt","w") as datajson:
#    datajson.write("data json")
# with open("datajson.txt") as datajson :
#   data = datajson.read()
#   print(data)
import json
newdata = {}
newdata["name"] = "farukh"
newdata["age"] = 25

with open("datajson.txt","r+") as datajon:
    datajon.read()
    json.dump(newdata,datajon)



