<<<<<<< HEAD
#include<stdio.h>
#include<string.h>
struct mystruct{
	int age;
	char letter;
	char name[30];
	
};
int main(){
	//two way to define struct
	struct mystruct h;
//	struct mystruct h1;
struct mystruct h1 ={
		65,'s',"solid work"
	};
                
	h.age=25;
	h.letter='m';
	strcpy(h.name,"master cam");
//	 h1 = h;
	printf("\n%d",h.age);
	printf("\n%c",h.letter);
	printf("\n%s",h.name);
	
	
	printf("\n%d \n%c \n%s",h1.age,h1.letter,h1.name);
}
=======
#include<stdio.h>
#include<string.h>
struct mystruct{
	int age;
	char letter;
	char name[30];
	
};
int main(){
	//two way to define struct
	struct mystruct h;
//	struct mystruct h1;
struct mystruct h1 ={
		65,'s',"solid work"
	};
                
	h.age=25;
	h.letter='m';
	strcpy(h.name,"master cam");
//	 h1 = h;
	printf("\n%d",h.age);
	printf("\n%c",h.letter);
	printf("\n%s",h.name);
	
	
	printf("\n%d \n%c \n%s",h1.age,h1.letter,h1.name);
}
>>>>>>> origin/main
