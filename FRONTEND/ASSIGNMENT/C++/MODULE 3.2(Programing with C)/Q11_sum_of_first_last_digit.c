<<<<<<< HEAD
#include<stdio.h>
int main(){
	int x,new_no;   //x take input and new_no store reminder of x%10 
      
	printf("(sum of first and last number) enter no. : ");
	scanf("%d",&x);
	
		int i= x%10;  // i store greater value
		
	if(x<0){
		x= -x;
	}
	while(x>0){
		
		if(new_no= x%10){

			  x = x/10;
			  
		}
		if(x==0 ){
			i +=new_no;
				printf("\nsun of first and last no. is : %d",i);  
		}
		
	}`

	return 0;
}
=======
#include<stdio.h>
int main(){
	int x,new_no;   //x take input and new_no store reminder of x%10 
      
	printf("(sum of first and last number) enter no. : ");
	scanf("%d",&x);
	
		int i= x%10;  // i store greater value
		
	if(x<0){
		x= -x;
	}
	while(x>0){
		
		if(new_no= x%10){

			  x = x/10;
			  
		}
		if(x==0 ){
			i +=new_no;
				printf("\nsun of first and last no. is : %d",i);  
		}
		
	}`

	return 0;
}
>>>>>>> origin/main
