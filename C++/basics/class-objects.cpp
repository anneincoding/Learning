#include <iostream>
using namespace std; 

class Book {
  private:
    //only code inside of class Book can access private 
    string rating;
  public: 
    string title;
    string author;
    int pages;
    Book() { // we can have multiple constructors
      title = "no title";
      author = "no author";
      pages = 0;
    };
    // constructor functions
    Book(string aTitle, string aAuthor, int aPages, string aRating){
      title = aTitle;
      author = aAuthor;
      pages = aPages;
      setRating(aRating);
    };
    void setRating(string aRating){
      rating = aRating;
    }
    string getRating(){
      return rating;
    }
    bool isLong() { 
      if (pages > 1000) return true;
      return false;
    }
};

int main() {
  Book book1("Animal Farm", "George Orwell", 400, "good");

  cout << book1.getRating() << endl;

  return 0;
}

