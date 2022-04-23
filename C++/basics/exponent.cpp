#include <iostream>
using namespace std;

int power (int baseNum, int powerNum) {
  if (baseNum == 1 || baseNum == 0) return baseNum;
  int result = 1;
  for (int i = 0; i < powerNum; i++) {
    result *= baseNum;
  }
  return result;
}

int main() {
  // int index = 1;

  cout << power(-1, 3);
  cout << power(-1, 2);
  return 0;
}

