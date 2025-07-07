<<<<<<< HEAD
#include<stdio.h>
int main(){
	int x,new_no;   //x take input and new_no store reminder of x%10 
	int i=0;        // i store greater valu
	printf("(sum of given number) enter no. : ");
	scanf("%d",&x);
	
	if(x<0){
		x= -x;
	}
	while(x>0){
		
		if(new_no= x%10){
			
			 x = x/10;
			 
		}

 i +=new_no;
	}
	printf("\nsum of no. is : %d",i);  
	return 0;
}
=======
#include<stdio.h>
int main(){
	int x,new_no;   //x take input and new_no store reminder of x%10 
	int i=0;        // i store greater valu
	printf("(sum of given number) enter no. : ");
	scanf("%d",&x);
	
	if(x<0){
		x= -x;
	}
	while(x>0){
		
		if(new_no= x%10){
			
			 x = x/10;
			 
		}

 i +=new_no;
	}
	printf("\nsum of no. is : %d",i);  
	return 0;
}
>>>>>>> origin/main
