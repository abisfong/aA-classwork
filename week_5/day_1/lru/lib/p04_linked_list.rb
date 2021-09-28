# require 'enumerable'
require 'byebug'
class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList 
  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new 
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    ptr = @head.next
    until ptr == @tail
      return ptr.val if ptr.key == key
      ptr = ptr.next
    end
  end

  def include?(key)
    ptr = @head.next
    until ptr == @tail
      return true if ptr.key == key
      ptr = ptr.next
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    new_node.next = @tail
    new_node.prev = @tail.prev
    @tail.prev.next = new_node
    @tail.prev = new_node
  end

  def update(key, val)
    ptr = @head.next
    until ptr == @tail
      ptr.val = val if ptr.key == key
      ptr = ptr.next
    end
  end

  def remove(key)
    ptr = @head.next
    until ptr == @tail
      if ptr.key == key
        right = ptr.next
        left = ptr.prev
        right.prev = left
        left.next = right
        ptr.next = ptr.prev = nil
        return
      end
      ptr = ptr.next
    end
  end

  def each
    # debugger
    ptr = @head.next
    while ptr != @tail
      yield ptr
      ptr = ptr.next
    end
    

  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
