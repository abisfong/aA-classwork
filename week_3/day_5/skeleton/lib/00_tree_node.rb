class PolyTreeNode
  attr_reader :value, :children, :parent

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(val)
    if parent != nil
      parent.children.delete(self)
    end
    parent = val
    val.children << self if val != nil
    
  end

  def inspect
    
  end

end