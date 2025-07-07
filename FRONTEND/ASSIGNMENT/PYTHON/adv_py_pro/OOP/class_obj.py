glo_var = "hello"
class person:
    local ="ibrahim"
    def __init__(self,name,age):
        self.name = name
        self.age = age
    def info(self):
        print(self.name+ " "+ self.age)
    def display (self):
        print(self.local + " " + glo_var)

print(glo_var)
p1 = person("far",25)
p1.display()