#include <iostream>
using namespace std;

  // & can get the physical memory address "pointer"
  // pointer variable : a coantainer where we can store memory address

int main() {

  int age = 28;
  int *pAge = &age;
  double gpa = 3.0;
  double *pGpa = &gpa;
  string name = "Anne";
  string *pName = &name;

  cout << pName;

  // cout << &age;

  return 0;
}

