#include <iostream>

using namespace std;

int main(){
  string name;

  // cout << name.length();
  // cout << name[0];
  // cout << name.find('e', 3);
  // cout << name.substr(1, 2);

  cout << "Enter your name: ";

  getline(cin, name);

  cout << "Hello, " << name << endl;
  
  return 0;
}