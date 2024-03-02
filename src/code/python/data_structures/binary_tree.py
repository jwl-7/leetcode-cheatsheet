class TreeNode:
    def __init__(self, data) -> None:
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self) -> None:
        self.root = None

    def __repr__(self) -> str:
        return 'Empty tree' if not self.root else self._repr_tree(self.root, '', True)

    def _repr_tree(self, node, prefix: str, is_left: bool) -> str:
        if node is None:
            return ''

        result = ''
        result += self._repr_tree(node.right, prefix + ('│   ' if is_left else '    '), False)
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\n'
        result += self._repr_tree(node.left, prefix + ('    ' if is_left else '│   '), True)

        return result

    def insert(self, data) -> None:
        if not self.root:
            self.root = TreeNode(data)
        else:
            self.insert_node(self.root, data)

    def insert_node(self, node, data) -> TreeNode:
        if not node:
            return TreeNode(data)

        if not node.left:
            node.left = TreeNode(data)
        elif not node.right:
            node.right = TreeNode(data)
        else:
            node.left = self.insert_node(node.left, data)

        return node
