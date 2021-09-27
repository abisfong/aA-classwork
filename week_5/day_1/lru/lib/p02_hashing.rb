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
  def my_str_hash
    self.chars.map(&:ord).my_hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.values.sort.map(&:my_str_hash).my_hash ^ self.keys.sort.my_hash
  end
end

#{a => [1,2,3], b =>[2,3,1]}
