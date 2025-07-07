

class pen:
    # id=10
    # name="pla pen"

    def __init__(self,id,name):
        self.id = id
        self.name=name

    def display (self):
        print("pen display",self.id,self.name)

    def test (self):
        print("pen test")

p = pen(1,"small")
p1 = pen(2,"xl")
p.display ()
p.test()

p1.display()