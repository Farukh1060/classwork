<<<<<<< HEAD
#include <stdio.h>
int main(){
		int bye;
		int water_bottle;
		int quantity;
	    int i=0;
	    int j=0;
    	int bye_more;

	printf("----------------------menu-------------------------\n\n");
	
		printf("1.water bottle\n\t 1.small bottle 5 rupess\n\t 2.big bottle 15 rupess\n");
		printf("2.fast food\n\t 1.pizza 150 rupess\n\t 2.cheese burger 200 rupess\n\n");
	
	

	printf("want to bye water bottle press 1.\n");
	printf("want to bye fast food press 2.\n\n");
		scanf("%d",&bye);

	switch(bye){
		case 1:
		
			//	printf("value of i %d\n",i);
			 //  	printf("value of j %d",j);
		do{
			//----------------water bottle --------------------
					printf("for small bottle press 1.\n");
		        	printf("for big bottle press 2.\n\n");
			
			     	scanf("%d",&water_bottle);
			     	
			     	
			     	
			//----------------small bottle---------------------     	
		     	if(water_bottle ==1){
		     	
					printf("u get small bottle for 5 ruppes \n");
					printf("quantity of small bottle :%d\n",i+1);
					printf("price of water bottles :%d\n",(i+1)*5);
					printf("want more water bottle press 1 for yes and 2 for no:\n\n");
					scanf("%d",&bye_more);
				          			if(bye_more==1){
			    			
									i++;
									}else{
					
											break;
										}
				
		       	}
		                       		
		   //-------------------big bottle--------------------                    	
			    else if(water_bottle ==2){
			    
			    	
				   	printf("u get big bottle for 15 ruppes \n");
				   	printf("quantity of big bottle :%d\n",j+1);
					printf("price of water bottles :%d\n",(j+1)*15);
				   		printf("want more water bottle press 1 for yes and 2 for no: \n\n");
					scanf("%d",&bye_more);
				    					if(bye_more==1){
														j++;
														}else{
																break;
															}
				    }
			//-------------------wrong input--------------------      	    
			    else {
		           	printf("wrong input");	
		          	}
		          
          }while(i==i&&j==j);		
			break;
		case 2:
			int food;
			
			
			
					//	printf("value of i %d\n",i);
			 //  	printf("value of j %d",j);
		do{
			//----------------water bottle --------------------
			printf("for onion flavour pizza press 1.\n");
			printf("for cheese burger press 2.\n\n");
			
				scanf("%d",&food);
			     	
			     	
			     	
			//----------------small bottle---------------------     	
		     	if(food ==1){
		     	
					printf("u get onion flavour pizza for 150 ruppes \n");
					printf("quantity of onion flavour pizza :%d\n",i+1);
					printf("price of onion flavour pizza :%d\n",(i+1)*150);
					printf("want more food press 1 for yes and 2 for no:\n\n");
					scanf("%d",&bye_more);
				          			if(bye_more==1){
			    			
									i++;
									}else{
					
											break;
										}
				
		       	}
		                       		
		   //-------------------big bottle--------------------                    	
			    else if(food ==2){
			    
			    	
				   	printf("u get cheese burger for 100 ruppes \n");
				   	printf("quantity of cheese burger :%d\n",j+1);
					printf("price of cheese burger :%d\n",(j+1)*100);
				   		printf("want more food press 1 for yes and 2 for no: \n\n");
					scanf("%d",&bye_more);
				    					if(bye_more==1){
														j++;
														}else{
																break;
															}
				    }
			//-------------------wrong input--------------------      	    
			    else {
		           	printf("wrong input");	
		          	}
		          
          }while(i==i&&j==j);
		
		break;
		
	}
}
=======
#include <stdio.h>
int main(){
		int bye;
		int water_bottle;
		int quantity;
	    int i=0;
	    int j=0;
    	int bye_more;

	printf("----------------------menu-------------------------\n\n");
	
		printf("1.water bottle\n\t 1.small bottle 5 rupess\n\t 2.big bottle 15 rupess\n");
		printf("2.fast food\n\t 1.pizza 150 rupess\n\t 2.cheese burger 200 rupess\n\n");
	
	

	printf("want to bye water bottle press 1.\n");
	printf("want to bye fast food press 2.\n\n");
		scanf("%d",&bye);

	switch(bye){
		case 1:
		
			//	printf("value of i %d\n",i);
			 //  	printf("value of j %d",j);
		do{
			//----------------water bottle --------------------
					printf("for small bottle press 1.\n");
		        	printf("for big bottle press 2.\n\n");
			
			     	scanf("%d",&water_bottle);
			     	
			     	
			     	
			//----------------small bottle---------------------     	
		     	if(water_bottle ==1){
		     	
					printf("u get small bottle for 5 ruppes \n");
					printf("quantity of small bottle :%d\n",i+1);
					printf("price of water bottles :%d\n",(i+1)*5);
					printf("want more water bottle press 1 for yes and 2 for no:\n\n");
					scanf("%d",&bye_more);
				          			if(bye_more==1){
			    			
									i++;
									}else{
					
											break;
										}
				
		       	}
		                       		
		   //-------------------big bottle--------------------                    	
			    else if(water_bottle ==2){
			    
			    	
				   	printf("u get big bottle for 15 ruppes \n");
				   	printf("quantity of big bottle :%d\n",j+1);
					printf("price of water bottles :%d\n",(j+1)*15);
				   		printf("want more water bottle press 1 for yes and 2 for no: \n\n");
					scanf("%d",&bye_more);
				    					if(bye_more==1){
														j++;
														}else{
																break;
															}
				    }
			//-------------------wrong input--------------------      	    
			    else {
		           	printf("wrong input");	
		          	}
		          
          }while(i==i&&j==j);		
			break;
		case 2:
			int food;
			
			
			
					//	printf("value of i %d\n",i);
			 //  	printf("value of j %d",j);
		do{
			//----------------water bottle --------------------
			printf("for onion flavour pizza press 1.\n");
			printf("for cheese burger press 2.\n\n");
			
				scanf("%d",&food);
			     	
			     	
			     	
			//----------------small bottle---------------------     	
		     	if(food ==1){
		     	
					printf("u get onion flavour pizza for 150 ruppes \n");
					printf("quantity of onion flavour pizza :%d\n",i+1);
					printf("price of onion flavour pizza :%d\n",(i+1)*150);
					printf("want more food press 1 for yes and 2 for no:\n\n");
					scanf("%d",&bye_more);
				          			if(bye_more==1){
			    			
									i++;
									}else{
					
											break;
										}
				
		       	}
		                       		
		   //-------------------big bottle--------------------                    	
			    else if(food ==2){
			    
			    	
				   	printf("u get cheese burger for 100 ruppes \n");
				   	printf("quantity of cheese burger :%d\n",j+1);
					printf("price of cheese burger :%d\n",(j+1)*100);
				   		printf("want more food press 1 for yes and 2 for no: \n\n");
					scanf("%d",&bye_more);
				    					if(bye_more==1){
														j++;
														}else{
																break;
															}
				    }
			//-------------------wrong input--------------------      	    
			    else {
		           	printf("wrong input");	
		          	}
		          
          }while(i==i&&j==j);
		
		break;
		
	}
}
>>>>>>> origin/main
