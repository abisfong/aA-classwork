class Array
  def my_uniq
    new_arr = []
    self.each do |ele|
      new_arr << ele unless new_arr.include?(ele)
    end
    new_arr
  end

  def two_sum
    new_arr = []
    (0...self.length).each do |i|
      (i+1...self.length).each do |j|
        new_arr << [i,j] if self[i] + self[j] == 0 
      end
    end
    return new_arr
  end

  def my_transpose
    raise "Empty matrix" if self.empty?
    raise "Invalid matrix" unless self.all? {|ele| ele.is_a?(Array)} # [] and 2D array
    raise "Invalid matrix" if self.any? {|ele| ele.length != self[0].length}
    new_matrix = Array.new(self.length) { Array.new(self.length) }
    (0...self.length).each do |i|
      (0...self.length).each do |j|
        new_matrix[j][i] = self[i][j]
      end
    end
    new_matrix
  end

end

def stock_picker(stock_prices)
  raise "No stock price information" if stock_prices.empty?
  raise "Not enough stock price information" if stock_prices.length == 1

  new_arr = [0, 1, stock_prices[1] - stock_prices[0]]
  (0...stock_prices.length).each do |i|
    (i+1...stock_prices.length).each do |j|
      if stock_prices[j] - stock_prices[i] > new_arr.last
        new_arr = [i, j, stock_prices[j] - stock_prices[i]] 
      end
    end
  end
  
  new_arr.pop
  new_arr
end