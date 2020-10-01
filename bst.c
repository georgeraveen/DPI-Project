#include<stdio.h>
#include<stdlib.h>

struct node{
	int data;
	struct node * left;
	struct node * right;
	
};



struct node* create(int val){
	
	struct node* newnode = malloc(sizeof(struct node));
	newnode->data= val;
	newnode->left=NULL;
    newnode->right = NULL;
    
    return newnode;
}

struct node* insert(struct node* root ,int value){
	
	if(root == NULL){
		
		create(value);
	}
	
	else if(root->data < value){
	root->left = 	insert(root->left , value);
		
	}
	
		else if(root->data > value){
	root->right = 	insert(root->right , value);
		
	}
	
	return root;
}
	
void inorder(struct node* root){
    if(root == NULL) 
	return;
    inorder(root->left);
    printf("%d\n", root->data);
    inorder(root->right);
}
	


int search(int num){
	struct node* root;
	if(root == NULL){
		return NULL;
	}
	
	else if(num == root->data){
		
		return root->data;
	}
	
	else if(num > root->data){
		return search( root->left);
	}
	
	else if(num < root->data){
		return search( root->right);
	}
	else{
		return ;
	}
}


int main(){
	
	struct node *root1 = NULL;
	struct node *root2 = NULL;
	int n1 , n2;
	


	root1 = insert(root1,12);
		
	insert(root1 ,34 );
	insert(root1 ,11 );
	insert(root1 ,9 );
	insert(root1 ,3 );
	

	root2 = insert(root2,3);
	insert(root2 ,2 );
	insert(root2 ,1 );
	insert(root2 ,5 );
	

	inorder(root1);
	inorder(root2);
	
	int array[5] = {12,34,11,9,3};
	int array1[4] = {3,2,1,5};

	int i ,j;
	for(i=0; i < 5 ; i++){
		for(j=0;j < 4; j++){
			if(array[i] == array1[j]){
				return 0;
			}
			else{
				return 1;
			}
		}
	}
	
}
