#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> array = {0, 1, 1, 2, 4, 6, 8, 9};
  int x;
  bool found = false;
  
  cout << "Input a number: ";
  cin >> x;

  for (int i = 0; i < array.size(); i++) {
    if (array[i] == x) {
      cout << "Found " << x << " at position " << i << " in the array" << endl;
      found = true;
      break;
    }
  }
  
  if (!found) {
    cout << "Number not found in array" << endl;
  }
  
  return 0;
}