<<<<<<< HEAD
#include<stdio.h>
int main(){
    int x,i,j;
    int factorial = 1;
    printf("enter no. to find factorial: ");
    scanf("%d",&x);
    printf("factorial of %d! is",x);
    for(i=x;i>=1;i--){
       
         factorial*=i;

         printf(" %d",i);
             if(i!=1){
                printf(" *");
         }else{
            break;
         }   
    }
     printf(" = %d",factorial);
=======
#include<stdio.h>
int main(){
    int x,i,j;
    int factorial = 1;
    printf("enter no. to find factorial: ");
    scanf("%d",&x);
    printf("factorial of %d! is",x);
    for(i=x;i>=1;i--){
       
         factorial*=i;

         printf(" %d",i);
             if(i!=1){
                printf(" *");
         }else{
            break;
         }   
    }
     printf(" = %d",factorial);
>>>>>>> origin/main
}