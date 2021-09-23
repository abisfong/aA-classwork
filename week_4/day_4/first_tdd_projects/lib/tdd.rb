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



end