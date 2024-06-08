#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class BinaryTree {
private:
    shared_ptr<TreeNode<T>> root;

public:
    BinaryTree() : root(nullptr) {}

    void insert(const T& data) {
        root = insertNode(root, data);
    }

    shared_ptr<TreeNode<T>> insertNode(shared_ptr<TreeNode<T>> node, const T& data) {
        if (!node) {
            return make_shared<TreeNode<T>>(data);
        }

        if (!node->left) {
            node->left = make_shared<TreeNode<T>>(data);
        } else if (!node->right) {
            node->right = make_shared<TreeNode<T>>(data);
        } else {
            node->left = insertNode(node->left, data);
        }

        return node;
    }

    string printTree() const {
        return root ? printNode(root, "", true) : "Empty tree";
    }

    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {
        string result;
        if (node) {
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\n";
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);
        }
        return result;
    }
};
