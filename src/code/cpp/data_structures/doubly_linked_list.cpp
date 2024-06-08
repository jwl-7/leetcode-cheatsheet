#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class ListNode {
public:
    T data;
    shared_ptr<ListNode<T>> prev;
    shared_ptr<ListNode<T>> next;

    ListNode(const T& data) : data(data), prev(nullptr), next(nullptr) {}
};

template<typename T>
class DoublyLinkedList {
private:
    shared_ptr<ListNode<T>> head;

public:
    DoublyLinkedList() : head(nullptr) {}

    void append(const T& data) {
        if (!head) {
            head = make_shared<ListNode<T>>(data);
            return;
        }

        auto curr = head;
        while (curr->next) {
            curr = curr->next;
        }

        auto new_node = make_shared<ListNode<T>>(data);
        curr->next = new_node;
        new_node->prev = curr;
    }

    void deleteNode(const T& data) {
        if (!head) {
            return;
        }

        if (head->data == data) {
            head = head->next;
            if (head) {
                head->prev = nullptr;
            }
            return;
        }

        auto curr = head;
        while (curr) {
            if (curr->data == data) {
                auto prev_node = curr->prev;
                prev_node->next = curr->next;
                if (curr->next) {
                    curr->next->prev = prev_node;
                }
                return;
            }
            curr = curr->next;
        }
    }

    void reverse() {
        auto curr = head;
        shared_ptr<ListNode<T>> prev = nullptr;

        while (curr) {
            auto next_node = curr->next;
            curr->next = prev;
            curr->prev = next_node;
            prev = curr;
            curr = next_node;
        }

        head = prev;
    }

    string toString() const {
        if (!head) {
            return "None";
        }

        string result;
        auto curr = head;

        while (curr) {
            result += "[" + to_string(curr->data) + "]";
            if (curr->next) {
                result += " <-> ";
            }
            curr = curr->next;
        }

        result += " <-> None";
        return result;
    }
};
