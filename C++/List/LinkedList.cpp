#include <iostream>
// #include <cstdio>
// #include <cstdlib>
// #include <queue>
// #include <stack>
// #include <algorithm>
// #include <string>
// #include <map>
// #include <set>
// #include <vector>

using namespace std;


int data[10]; //data
int address[10]; //next adress

// add new node p, give p a value val
void add (int ind, int p, int val) {
  address[p] = address[ind];
  address[ind] = p;
  data[p] = val;
};

int main() {
  int head = 3;
  data[3] = 0;
  add(3, 5, 1);
  add(5, 2, 2);
  add(2, 7, 3);
  add(7, 9, 100);
  add(5, 6, 33);
  int p = head;
  while (p != 0) {
    cout << data[p] << endl;
    p = address[p];
  };
  
  return 0;
}


/**
struct Node {
  Node(int data): data(data), next(NULL){};
  int data;
  Node *next;
};

int main() {
  Node *head = NULL;
  head = new Node(1);
  head -> next = new Node(2);
  head -> next -> next = new Node(3);
  head -> next -> next -> next = new Node(4);

  Node *p = head;
  while(p != NULL) {
    cout << p -> data << endl;
    p = p -> next;
  }
  return 0;
}
*/