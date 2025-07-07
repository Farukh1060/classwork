<<<<<<< HEAD
#include<stdio.h>
int main(){
	float day,year,month;
int x;
	int do_next=1;
do{
	
		printf("press 1 to convert day to year\n");
	printf("press 2 to convert year to day\n");
	scanf("%d",&x);

	switch(x){
		case 1:
			
			printf("enter year\n");
			scanf("%fyears",&year);
			
			day= 365*year;
			printf("%f days",day);
			break;
		case 2:
//			day= 365*year;
        	printf("enter day\n");
			scanf("%fdays",&day);
			year= day/365;
			printf("%f years",year);
			break;
	
		default:
			printf("wrong input");
			break;	
	}
	if(do_next==1){
		printf("\ndo u want to continue press 1");
		scanf("%d",&do_next);
		continue;
	}else{
	break;
	}
	
}while(do_next==1);
}
=======
#include<stdio.h>
int main(){
	float day,year,month;
int x;
	int do_next=1;
do{
	
		printf("press 1 to convert day to year\n");
	printf("press 2 to convert year to day\n");
	scanf("%d",&x);

	switch(x){
		case 1:
			
			printf("enter year\n");
			scanf("%fyears",&year);
			
			day= 365*year;
			printf("%f days",day);
			break;
		case 2:
//			day= 365*year;
        	printf("enter day\n");
			scanf("%fdays",&day);
			year= day/365;
			printf("%f years",year);
			break;
	
		default:
			printf("wrong input");
			break;	
	}
	if(do_next==1){
		printf("\ndo u want to continue press 1");
		scanf("%d",&do_next);
		continue;
	}else{
	break;
	}
	
}while(do_next==1);
}
>>>>>>> origin/main
