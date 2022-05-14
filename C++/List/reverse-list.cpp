
#include <iostream>
#include <set>
#include <vector>
using namespace std;

struct  Node
{
  Node(int data): data(data), next(NULL){}
  int data;
  Node *next;
};
Node *reverse(Node *head, int n) {
  if (n == 1) return head;
  Node *tail = head -> next, *prev = reverse(head -> next, n-1);
  head -> next = tail -> next;
  tail -> next = head;
  return prev;
}

int main(){
  Node *head = nullptr;
  head = new Node(1);
  head -> next = new Node(2);
  head -> next -> next = new Node(3);
  head -> next -> next -> next= new Node(4);

  Node *p = reverse(head, 3);;
  while (p)
  {
    cout << p -> data ;
    p = p -> next;
  }
}