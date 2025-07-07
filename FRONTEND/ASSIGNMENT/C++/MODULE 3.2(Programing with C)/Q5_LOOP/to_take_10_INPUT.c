<<<<<<< HEAD
#include<stdio.h>
int main (){
    int num[10],i;
    int even =0;
    int odd =0;
    int ev_sum =0;
    int od_sum =0;

printf("\nenter 10 num:");
    for(i=0;i<10;i++){
             scanf("%d",&num[i]);
    }

printf("\nnum is :");
       for(i=0;i<10;i++){
             printf(" %d",num[i]);
    }
// printf("\neven_num is :");
       for(i=0;i<10;i++){
        if(num[i]%2==0){
            even+=1;
            ev_sum +=num[i];
            
        }else{
            odd+=1;
            od_sum += num[i];
        }
       
    } 
     printf("\nTotal even no :%d",even);  
     printf("\nTotal odd no :%d",odd); 

     printf("\nsum of even no :%d",ev_sum);  
     printf("\nsum of odd no :%d",od_sum);  
    
=======
#include<stdio.h>
int main (){
    int num[10],i;
    int even =0;
    int odd =0;
    int ev_sum =0;
    int od_sum =0;

printf("\nenter 10 num:");
    for(i=0;i<10;i++){
             scanf("%d",&num[i]);
    }

printf("\nnum is :");
       for(i=0;i<10;i++){
             printf(" %d",num[i]);
    }
// printf("\neven_num is :");
       for(i=0;i<10;i++){
        if(num[i]%2==0){
            even+=1;
            ev_sum +=num[i];
            
        }else{
            odd+=1;
            od_sum += num[i];
        }
       
    } 
     printf("\nTotal even no :%d",even);  
     printf("\nTotal odd no :%d",odd); 

     printf("\nsum of even no :%d",ev_sum);  
     printf("\nsum of odd no :%d",od_sum);  
    
>>>>>>> origin/main
}