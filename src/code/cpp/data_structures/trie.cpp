#include <iostream>
#include <unordered_map>
#include <vector>
#include <memory>

using namespace std;


class TrieNode {
public:
    unordered_map<char, shared_ptr<TrieNode>> children;
    bool is_word;

    TrieNode() : is_word(false) {}
};

class Trie {
private:
    shared_ptr<TrieNode> root;

public:
    Trie() : root(make_shared<TrieNode>()) {}

    void build(const vector<string>& words) {
        for (const auto& word : words) {
            insert(word);
        }
    }

    void insert(const string& word) {
        shared_ptr<TrieNode> node = root;

        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                node->children[ch] = make_shared<TrieNode>();
            }
            node = node->children[ch];
        }

        node->is_word = true;
    }

    bool search(const string& word) {
        shared_ptr<TrieNode> node = root;

        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                return false;
            }
            node = node->children[ch];
        }

        return node->is_word;
    }

    bool startsWith(const string& prefix) {
        shared_ptr<TrieNode> node = root;

        for (char ch : prefix) {
            if (node->children.find(ch) == node->children.end()) {
                return false;
            }
            node = node->children[ch];
        }

        return true;
    }

    vector<string> collectWords(shared_ptr<TrieNode> node, const string& prefix) {
        vector<string> words;

        if (node->is_word) {
            words.push_back(prefix);
        }

        for (const auto& [ch, childNode] : node->children) {
            auto childWords = collectWords(childNode, prefix + ch);
            words.insert(words.end(), childWords.begin(), childWords.end());
        }

        return words;
    }

    vector<string> collectWords() {
        return collectWords(root, "");
    }
};
