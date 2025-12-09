class TrieNode
  attr_accessor :children, :is_word

  def initialize
    @children = {}
    @is_word  = false
  end
end

class Trie
  attr_accessor :root

  def initialize
    @root = TrieNode.new
  end

  def build(words)
    words.each { |word| insert(word) }
  end

  def insert(word)
    node = @root
    word.each_char do |char|
      node.children[char] ||= TrieNode.new
      node = node.children[char]
    end
    node.is_word = true
  end

  def search(word)
    node = @root
    word.each_char do |char|
      return false unless node.children.key?(char)
      node = node.children[char]
    end
    node.is_word
  end

  def starts_with(prefix)
    node = @root
    prefix.each_char do |char|
      return false unless node.children.key?(char)
      node = node.children[char]
    end
    true
  end

  def collect_words(node = @root, prefix = '')
    words = []
    words << prefix if node.is_word
    node.children.each do |char, child_node|
      words.concat(collect_words(child_node, prefix + char))
    end
    words
  end

  def to_s
    "Trie:\n" + print_trie(@root)
  end

  private

  def print_trie(node, level = 0, prefix = '')
    return '' unless node

    output = ''
    prefix_str = '    ' * level + prefix
    output += prefix_str + ' ├─ (*)' + "\n" if node.is_word

    node.children.each_with_index do |(char, child_node), i|
      is_last = i == node.children.size - 1
      marker = is_last ? '└─ ' : '├─ '
      output += prefix_str + marker + char + "\n"
      new_prefix = is_last ? '     ' : '    │'
      output += print_trie(child_node, level + 1, new_prefix)
    end

    output
  end
end
