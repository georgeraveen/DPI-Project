#include <stdio.h>

//for an undirected graphs

int graph[5][5];
int add(int, int);
int print(void);
void setZeros();

int main()
{
	setZeros();
	add(0, 1);
	add(0, 4);
	add(1, 4);
	add(1, 3);
	add(3, 4);
	add(1, 2);
	add(2, 3);

	print();
}

//initialize all elements to zero at the begining
void setZeros()
{
	int i, j;
	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 5; j++)
		{
			graph[i][i] = 0;
		}
	}
	return;
}

int add(int ele1, int ele2)
{

	graph[ele1][ele2] = 1;
	graph[ele2][ele1] = 1;
	return 0;
}

int delete (int ele1, int ele2)
{

	graph[ele1][ele2] = 0;
	graph[ele2][ele1] = 0;
	return 0;
}

int print()
{

	int i, j;
	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 5; j++)
		{

			printf("%d", graph[i][j]);
		}
		printf("\n");
	}
	return 0;
}
