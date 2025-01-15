#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountHolder; // Tên chủ tài khoản (Dữ liệu riêng tư)
    double balance;       // Số dư tài khoản (Dữ liệu riêng tư)

public:
    // Constructor để khởi tạo tài khoản
    BankAccount(string name, double initialBalance) {
        accountHolder = name;
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
            cout << "Số dư không hợp lệ. Đặt số dư ban đầu là 0." << endl;
        }
    }

    // Getter cho tên chủ tài khoản
    string getAccountHolder() {
        return accountHolder;
    }

    // Setter cho tên chủ tài khoản
    void setAccountHolder(string name) {
        if (!name.empty()) {
            accountHolder = name;
        } else {
            cout << "Tên chủ tài khoản không được để trống." << endl;
        }
    }

    // Getter cho số dư tài khoản
    double getBalance() {
        return balance;
    }

    // Setter cho số dư tài khoản
    void setBalance(double newBalance) {
        if (newBalance >= 0) {
            balance = newBalance;
        } else {
            cout << "Số dư không hợp lệ. Không thể đặt giá trị âm." << endl;
        }
    }

    // Phương thức gửi tiền
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Đã gửi " << amount << " vào tài khoản." << endl;
        } else {
            cout << "Số tiền gửi không hợp lệ." << endl;
        }
    }

    // Phương thức rút tiền
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Đã rút " << amount << " khỏi tài khoản." << endl;
        } else {
            cout << "Số tiền rút không hợp lệ hoặc vượt quá số dư." << endl;
        }
    }
};

int main() {
    // Tạo một tài khoản ngân hàng
    BankAccount myAccount("Nguyen Van A", 1000.0);

    // Kiểm tra thông tin tài khoản
    cout << "Chủ tài khoản: " << myAccount.getAccountHolder() << endl;
    cout << "Số dư ban đầu: " << myAccount.getBalance() << endl;

    // Sử dụng setter để thay đổi thông tin
    myAccount.setAccountHolder("Tran Van B");
    cout << "Chủ tài khoản mới: " << myAccount.getAccountHolder() << endl;

    myAccount.setBalance(2000.0);
    cout << "Số dư mới: " << myAccount.getBalance() << endl;

    // Thử đặt giá trị không hợp lệ
    myAccount.setBalance(-500);
    cout << "Số dư hiện tại: " << myAccount.getBalance() << endl;

    myAccount.setAccountHolder(""); // Thử đặt tên rỗng

    return 0;
}
