#include <iostream>
#include <string>
using namespace std;

class ARR_2 {
  private:
    float point[50];
    string student[50];
    int n;
  public:
    void nhapSL();
    void nhapInfo();
    void sort();
    void print();
};

void ARR_2::nhapSL() {
  cout << "\n Enter number of students: ";
  cin >> n;
}

void ARR_2::nhapInfo() { 
  for (int i=0; i<n; i++) {
    cout << "Student position " << i+1 << "'s name is: ";
    cin >> student[i];
    cout << "Student's point is: ";
    cin >> point[i];
  }
}

void ARR_2::sort(){
    float tempPoint; 
    string tempStudent;
    for (int i = 0; i < n; i++){
        for (int j = i + 1; j < n; j++){
            if (point[i] < point[j]){
                
                tempPoint = point[i];
                point[i] = point[j];
                point[j] = tempPoint;
                
                tempStudent = student[i];
                student[i] = student[j];
                student[j] = tempStudent;
            }
        }
    }
}

void ARR_2::print() {
  for (int i=0; i<n; i++) {
    cout << student[i] << " with " << point[i] << " point(s)" << "\n";
  }
}

int main() {
  ARR_2 TN;
  TN.nhapSL();
  TN.nhapInfo();
  TN.sort();
  TN.print();
}
