#include <iostream>
#include <string>
using namespace std;

// Lớp cha (Superclass)
class Employee {
protected:
    string name;
    int age;
    double salary;

public:
    // Constructor
    Employee(string empName, int empAge, double empSalary)
        : name(empName), age(empAge), salary(empSalary) {}

    // Phương thức hiển thị thông tin nhân viên
    virtual void displayInfo() {
        cout << "Tên: " << name << endl;
        cout << "Tuổi: " << age << endl;
        cout << "Lương cơ bản: " << salary << endl;
    }
};

// Lớp con (Subclass) kế thừa từ Employee
class Manager : public Employee {
private:
    int teamSize;

public:
    // Constructor
    Manager(string empName, int empAge, double empSalary, int empTeamSize)
        : Employee(empName, empAge, empSalary), teamSize(empTeamSize) {}

    // Ghi đè (Override) phương thức hiển thị thông tin
    void displayInfo() override {
        Employee::displayInfo(); // Gọi phương thức lớp cha
        cout << "Quản lý đội ngũ: " << teamSize << " người" << endl;
    }
};

// Lớp con (Subclass) khác kế thừa từ Employee
class Developer : public Employee {
private:
    string programmingLanguage;

public:
    // Constructor
    Developer(string empName, int empAge, double empSalary, string empLanguage)
        : Employee(empName, empAge, empSalary), programmingLanguage(empLanguage) {}

    // Ghi đè (Override) phương thức hiển thị thông tin
    void displayInfo() override {
        Employee::displayInfo(); // Gọi phương thức lớp cha
        cout << "Ngôn ngữ lập trình: " << programmingLanguage << endl;
    }
};

int main() {
    // Tạo đối tượng lớp cha và lớp con
    Employee emp("Nguyen Van A", 30, 5000.0);
    Manager mgr("Tran Van B", 40, 8000.0, 10);
    Developer dev("Le Thi C", 25, 6000.0, "C++");

    // Hiển thị thông tin
    cout << "Thông tin nhân viên:" << endl;
    emp.displayInfo();

    cout << "\nThông tin quản lý:" << endl;
    mgr.displayInfo();

    cout << "\nThông tin lập trình viên:" << endl;
    dev.displayInfo();

    return 0;
}
