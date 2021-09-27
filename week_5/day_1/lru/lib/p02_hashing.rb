class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    return nil.hash if self.length == 0
    self.inject { |acc, el| acc.hash ^ el.hash }
  end
end


class String
  def hash
    self.chars.map(&:ord).hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    keys = self.keys
    values = self.values
    keys_as_strings = self.keys.map(&:to_s)
    keys_hash = keys_as_strings.hash
    values_hash = values.hash
    keys_hash ^ values_hash
  end
end
