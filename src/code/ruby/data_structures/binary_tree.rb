class TreeNode
  attr_accessor :data, :left, :right

  def initialize(data)
    @data   = data
    @left   = nil
    @right  = nil
  end
end

class BinaryTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(data)
    if @root.nil?
      @root = TreeNode.new(data)
    else
      insert_node(@root, data)
    end
  end

  def insert_node(node, data)
    return TreeNode.new(data) if node.nil?

    if node.left.nil?
      node.left = TreeNode.new(data)
    elsif node.right.nil?
      node.right = TreeNode.new(data)
    else
      node.left = insert_node(node.left, data)
    end

    node
  end

  def to_s
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)
  end

  private

  def print_tree(node, prefix, is_left)
    return '' if node.nil?

    result = ''
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\n"
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)

    result
  end
end
