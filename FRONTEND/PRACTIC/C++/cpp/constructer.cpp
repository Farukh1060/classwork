<<<<<<< HEAD
#include<iostream>
using namespace std;
class myclass{
	public:
	string name;
	int roll_no;
	myclass(){
		cout<<"i am constructer"<<endl;
	}
	int speed(int maxspeed){
		return maxspeed;
	}
	
	
};
int main(){
	myclass student;
	myclass student1;
	
	student.name = "master cam";
	student.roll_no = 25;
	cout<<"name :"<<student.name<<endl<<"roll_no :"<<student.roll_no<<endl;
	cout<<student.speed(200)<<endl;
	
	
	student1.name = "solid work";
	student1.roll_no = 85;
	cout<<student1.name<<endl<<student1.roll_no<<endl;

	
	
}
=======
#include<iostream>
using namespace std;
class myclass{
	public:
	string name;
	int roll_no;
	myclass(){
		cout<<"i am constructer"<<endl;
	}
	int speed(int maxspeed){
		return maxspeed;
	}
	
	
};
int main(){
	myclass student;
	myclass student1;
	
	student.name = "master cam";
	student.roll_no = 25;
	cout<<"name :"<<student.name<<endl<<"roll_no :"<<student.roll_no<<endl;
	cout<<student.speed(200)<<endl;
	
	
	student1.name = "solid work";
	student1.roll_no = 85;
	cout<<student1.name<<endl<<student1.roll_no<<endl;

	
	
}
>>>>>>> origin/main
