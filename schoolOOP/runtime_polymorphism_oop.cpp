#include <iostream>
using namespace std;

class Shape {
public:
    // Phương thức ảo
    virtual void draw() {
        cout << "Vẽ một hình dạng." << endl;
    }

    // Tính diện tích (nạp chồng hàm)
    double area(double radius) {
        return 3.14 * radius * radius; // Diện tích hình tròn
    }

    double area(double length, double width) {
        return length * width; // Diện tích hình chữ nhật
    }
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Vẽ một hình tròn." << endl;
    }
};

class Rectangle : public Shape {
public:
    void draw() override {
        cout << "Vẽ một hình chữ nhật." << endl;
    }
};

int main() {
    Shape* shape; // Con trỏ lớp cha

    Circle circle;
    Rectangle rectangle;

    // Runtime polymorphism
    shape = &circle;
    shape->draw();

    shape = &rectangle;
    shape->draw();

    // Compile-time polymorphism
    Shape s;
    cout << "Diện tích hình tròn (bán kính 5): " << s.area(5) << endl;
    cout << "Diện tích hình chữ nhật (5x10): " << s.area(5, 10) << endl;

    return 0;
}
