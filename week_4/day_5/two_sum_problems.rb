def bad_two_sum?(arr, target_sum)
  arr.each_with_index do |ele, i|
    arr.each_with_index do |ele_2, j|
      return true if j > i && (ele + ele_2 == target_sum)
    end
  end
  false
end

def okay_two_sum?(arr, target_sum)
  arr.sort.each_with_index do |ele, i|
    return true if bsearch(arr[0...i] + arr[i+1..-1], target_sum - ele)
  end
  false
end


def bsearch(arr, target_sum)
  return false if arr.length == 0

  mid = arr.length/2

  return true if arr[mid] == target_sum

  case target_sum <=> arr[mid]
  when -1
    bsearch(arr[0...mid], target_sum)
  when 1
    bsearch(arr[mid+1..-1], target_sum)
  end
end

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 8)