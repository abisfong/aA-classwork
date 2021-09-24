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
list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)

