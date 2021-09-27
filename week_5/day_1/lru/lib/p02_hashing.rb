class Integer
  # Integer#hash already implemented for you
end

class Array
  def my_hash
    return nil.hash if self.length == 0
    self.inject { |acc, el| acc.hash ^ el.hash }
  end
end

class String
  def hash
    self.chars.my_hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
