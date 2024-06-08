public class TreeNode<T extends Comparable<T>> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T data) {
        this.data = data;
        left = null;
        right = null;
    }
}

public class BinarySearchTree<T extends Comparable<T>> {
    TreeNode<T> root;

    public BinarySearchTree() {
        root = null;
    }

    public void insert(T data) {
        root = insertNode(root, data);
    }

    private TreeNode<T> insertNode(TreeNode<T> node, T data) {
        if (node == null) {
            return new TreeNode<>(data);
        }

        if (data.compareTo(node.data) < 0) {
            node.left = insertNode(node.left, data);
        } else if (data.compareTo(node.data) > 0) {
            node.right = insertNode(node.right, data);
        }

        return node;
    }

    @Override
    public String toString() {
        return root == null ? "Empty tree" : printTree(root, "", true);
    }

    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {
        if (node == null) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\n");
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));

        return sb.toString();
    }
}
