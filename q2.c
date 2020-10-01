#include<stdio.h>


int main(){
	
	int array[20];
	int i,j;
	int count1[20] ={0} ;
	int count2[20] = {0};
	
	
	for(i=0 ; i < 7; i++){
		scanf("%d" , &array[i]);
	}
	
//	int count = 0;
	int k ;
	
	for(i=0 ; i < 7; i++){
		for(j=0; j < i ; j++){
				if(array[i] < array[j]){
				count1[i] = count1[i] +1;
				
		}

	}
}

	for(i=0 ; i < 7; i++){
			for(k = i ; k < 7 ;k++){

			 if(array[k] < array[i]){
				count2[i] = count2[i] +1;
				
			}
			
			
	}
}


	for(i=0 ; i < 7; i++){
		printf("%d\t" ,count1[i] );
	}
	
	printf("\n");
	
		for(i=0 ; i < 7; i++){
		printf("%d\t" ,count2[i] );
	}
}
