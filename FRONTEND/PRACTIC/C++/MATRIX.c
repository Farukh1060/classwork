<<<<<<< HEAD
#include <stdio.h>
int main(){
	int i,j;
	int array[2][3];
	int array2[2][3];
	int array3[2][3];
	printf("enter 2/3 array:");
		for(i=0;i<2;i++){
		for(j=0;j<3;j++){
				scanf("%d",&array[i][j]);	
					
		}
}


	printf("enter 2/3 array2:");
		for(i=0;i<2;i++){
		for(j=0;j<3;j++){
				scanf("%d",&array2[i][j]);		
		}
}
	printf("your 2/3 array:");
	for(i=0;i<2;i++){
	for(j=0;j<3;j++){
			printf(" %d  ",array[i][j]);		
		}
}
	printf("\n");
		printf("your 2/3 array2:");
for(i=0;i<2;i++){
		for(j=0;j<3;j++){
			printf(" %d  ",array2[i][j]);		
		}
	

}
	printf("\n");	printf("addation of two array is:");
	for(i=0;i<2;i++){
		for(j=0;j<3;j++){
		array3[i][j]=array[i][j]+array2[i][j];
			printf("%d   ",array3[i][j]);		
		}
	
  }
}
=======
#include <stdio.h>
int main(){
	int i,j;
	int array[2][3];
	int array2[2][3];
	int array3[2][3];
	printf("enter 2/3 array:");
		for(i=0;i<2;i++){
		for(j=0;j<3;j++){
				scanf("%d",&array[i][j]);	
					
		}
}


	printf("enter 2/3 array2:");
		for(i=0;i<2;i++){
		for(j=0;j<3;j++){
				scanf("%d",&array2[i][j]);		
		}
}
	printf("your 2/3 array:");
	for(i=0;i<2;i++){
	for(j=0;j<3;j++){
			printf(" %d  ",array[i][j]);		
		}
}
	printf("\n");
		printf("your 2/3 array2:");
for(i=0;i<2;i++){
		for(j=0;j<3;j++){
			printf(" %d  ",array2[i][j]);		
		}
	

}
	printf("\n");	printf("addation of two array is:");
	for(i=0;i<2;i++){
		for(j=0;j<3;j++){
		array3[i][j]=array[i][j]+array2[i][j];
			printf("%d   ",array3[i][j]);		
		}
	
  }
}
>>>>>>> origin/main
