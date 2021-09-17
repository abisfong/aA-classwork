class PolyTreeNode
  attr_reader :value, :children, :parent

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(val)
    if parent != nil
      @parent.children.delete(self)
    end
    @parent = val
    val.children << self if val != nil
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    raise "Not a child" if !@children.include?(child)
    child.parent = nil
  end

  def dfs(target)
    return self if self.value == target
    self.children.each do |child|
      res = child.dfs(target)
      return res if res
    end
    nil
  end

  def bfs(target)
    queue = [self]
    while !queue.empty?
      node = queue.shift
      return node if node.value == target
      queue.concat(node.children)
    end
    nil
  end
end