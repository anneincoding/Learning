#include <iostream>
using namespace std;

int main() {
  string color, pluralNoun, celebrity;

  cout << "Enter a color: ";
  getline(std::cin, color);
  cout << "Enter a plural noun: ";
  getline(std::cin, pluralNoun);
  cout << "Enter a celebrity name: ";
  getline(std::cin, celebrity);

  cout << " Roses are " << color  << endl;
  cout << pluralNoun <<" are blue" << endl;
  cout << " I love "<< celebrity  << endl;

  return 0;
}