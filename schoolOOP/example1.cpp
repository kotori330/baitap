#include <iostream>
using namespace std;

class ARR_1{
  private: 
    float a[50];
    int n;
  public:
    void nhap();
    float tong();
};

void ARR_1::nhap() { // "Scope resolution operator" -> To access variable/function names declared in other scope 
  cout << "\n Enter array's number of element: ";
  cin >> n;
  for (int i=0; i< n; i++) {
    cout << "a[" << i+1 << "]";
    cin >> a[i];
  }
};

float ARR_1::tong() {
  float temp = a[0];
  for (int i=1; i<n; i++) {
    temp += a[i];
  }
  return temp;
}

int main() {
  ARR_1 TN; // Declare an object 'TN' as a 1D array
  TN.nhap();
  cout << "Total income: " << TN.tong();
}