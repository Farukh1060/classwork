<<<<<<< HEAD
#include<stdio.h>
int main(){
	int x,new_no;   //x take input and new_no store reminder of x%10
	 int max_no =0; 
      
	printf("enter no. : ");
	scanf("%d",&x);
		
	if(x<0){
		x= -x;
	}
	while(x>0){
		
		if(new_no = x%10){
			if(new_no > max_no){
				max_no = new_no;

			 }
            //  else{
			// 	continue;
			// }5698

			  x = x/10;
			  
		}
		
				
	
		
	}
printf("\nmax no. is : %d",max_no);  
	return 0;
}
=======
#include<stdio.h>
int main(){
	int x,new_no;   //x take input and new_no store reminder of x%10
	 int max_no =0; 
      
	printf("enter no. : ");
	scanf("%d",&x);
		
	if(x<0){
		x= -x;
	}
	while(x>0){
		
		if(new_no = x%10){
			if(new_no > max_no){
				max_no = new_no;

			 }
            //  else{
			// 	continue;
			// }5698

			  x = x/10;
			  
		}
		
				
	
		
	}
printf("\nmax no. is : %d",max_no);  
	return 0;
}
>>>>>>> origin/main
