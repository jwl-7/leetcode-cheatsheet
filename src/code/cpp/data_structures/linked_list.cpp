#include <iostream>

using namespace std;


template<typename T>
class ListNode {
public:
    T data;
    ListNode* next;

    ListNode(const T& data) : data(data), next(nullptr) {}
};

template<typename T>
class LinkedList {
private:
    ListNode<T>* head;

public:
    LinkedList() : head(nullptr) {}

    void append(const T& data) {
        if (!head) {
            head = new ListNode<T>(data);
            return;
        }

        ListNode<T>* curr = head;

        while (curr->next) {
            curr = curr->next;
        }

        curr->next = new ListNode<T>(data);
    }

    void deleteNode(const T& data) {
        if (!head) {
            return;
        }

        if (head->data == data) {
            ListNode<T>* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        ListNode<T>* prev = nullptr;
        ListNode<T>* curr = head;

        while (curr) {
            if (curr->data == data) {
                prev->next = curr->next;
                delete curr;
                return;
            }

            prev = curr;
            curr = curr->next;
        }
    }

    void reverse() {
        ListNode<T>* prev = nullptr;
        ListNode<T>* curr = head;

        while (curr) {
            ListNode<T>* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }

        head = prev;
    }

    ~LinkedList() {
        ListNode<T>* curr = head;

        while (curr) {
            ListNode<T>* temp = curr;
            curr = curr->next;
            delete temp;
        }
    }

    void display() {
        ListNode<T>* curr = head;

        while (curr) {
            cout << "[" << curr->data << "]";
            if (curr->next) {
                cout << " -> ";
            }
            curr = curr->next;
        }

        cout << " -> None" << endl;
    }
};
