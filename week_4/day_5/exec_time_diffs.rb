def my_min_phase_1(arr) # O(n^2)
  count = 0
  arr.each_with_index do |el_1, i|
    arr.each_with_index do |el_2, j|
      if j > i && el_1 < el_2
        if count > el_1
          count = el_1
        end
      end
    end
  end
  count
end

def my_min(arr) # O(n)
  arr.inject { |acc, el| acc < el ? acc : el }
end

# my_min test
# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)


# def largest_contiguous_subsum(list)

#   subsets = []
#   (0...list.length).each do |i|
#     (i...list.length).each do |j|
#       subsets << list[i..j]
#     end
#   end

#   subsets.inject do |acc, ele|
#     acc.sum > ele.sum ? acc : ele
#   end.sum

# end

list = [5, 3, -7]
# p largest_contiguous_subsum(list) # => 8

def largest_contiguous_subsum(list)
  max_sum = list.first
  current = 0
  (0...list.length).each do |i|
      current += list[i]
      if max_sum < current
        max_sum = current
      end
      if current <= 0
        current = 0
      end
    end
  
  max_sum
end

 list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => 8