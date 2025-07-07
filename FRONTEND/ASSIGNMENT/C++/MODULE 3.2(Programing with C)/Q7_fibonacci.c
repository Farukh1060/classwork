<<<<<<< HEAD
#include<stdio.h>
int main(){
    int x,i,j;
   
    printf("enter no. to find fibonacci: ");
    scanf("%d",&x);
 int fibonacci[x];
     for(i=0;i<x;i++){
        if(i<2){
             fibonacci[i]=i;
            //   printf(" %d",fibonacci[i]);
        }else if(i>=2) {
            fibonacci[i] = fibonacci[i-2]+fibonacci[i-1];
            //  printf(" %d",fibonacci[i]);
        }
      

     }
     for(i=0;i<x;i++){
         printf(" %d",fibonacci[i]);
     }

 

 return 0;

=======
#include<stdio.h>
int main(){
    int x,i,j;
   
    printf("enter no. to find fibonacci: ");
    scanf("%d",&x);
 int fibonacci[x];
     for(i=0;i<x;i++){
        if(i<2){
             fibonacci[i]=i;
            //   printf(" %d",fibonacci[i]);
        }else if(i>=2) {
            fibonacci[i] = fibonacci[i-2]+fibonacci[i-1];
            //  printf(" %d",fibonacci[i]);
        }
      

     }
     for(i=0;i<x;i++){
         printf(" %d",fibonacci[i]);
     }

 

 return 0;

>>>>>>> origin/main
}