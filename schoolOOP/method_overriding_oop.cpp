#include <iostream>
using namespace std;

// Lớp cha
class Animal {
public:
    // Phương thức ảo (virtual method)
    virtual void speak() {
        cout << "Animal đang phát ra âm thanh." << endl;
    }
};

// Lớp con kế thừa từ Animal
class Dog : public Animal {
public:
    // Ghi đè phương thức speak
    void speak() override {
        cout << "Dog: Gâu gâu!" << endl;
    }
};

// Lớp con khác kế thừa từ Animal
class Cat : public Animal {
public:
    // Ghi đè phương thức speak
    void speak() override {
        cout << "Cat: Meo meo!" << endl;
    }
};

int main() {
    Animal* animal; // Con trỏ kiểu lớp cha

    Dog dog;
    Cat cat;

    animal = &dog; // Con trỏ trỏ đến đối tượng Dog
    animal->speak();

    animal = &cat; // Con trỏ trỏ đến đối tượng Cat
    animal->speak();

    return 0;
}
