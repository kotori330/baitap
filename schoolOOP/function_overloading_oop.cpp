#include <iostream>
using namespace std;

class Calculator {
public:
    // Phương thức cộng hai số nguyên
    int add(int a, int b) {
        return a + b;
    }

    // Phương thức cộng ba số nguyên
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Phương thức cộng hai số thực
    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    Calculator calc;

    cout << "Tổng hai số nguyên: " << calc.add(5, 10) << endl;
    cout << "Tổng ba số nguyên: " << calc.add(5, 10, 15) << endl;
    cout << "Tổng hai số thực: " << calc.add(3.5, 2.7) << endl;

    return 0;
}
