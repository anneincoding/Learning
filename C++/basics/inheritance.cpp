#include <iostream>
using namespace std; 

class Chief {
  public: 
    void cook() {
      cout << "cook food";
    }
};

class ChineseChief : public Chief {
  public: 
    void cook() {
      cout << "different food";
    }
    void cookChinese() {
      cout << "delicious Chinese food";
    }
};

int main() {
  ChineseChief chief;

  chief.cook();

  return 0;
}

