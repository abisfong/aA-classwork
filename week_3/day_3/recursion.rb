require ("byebug")

def range (start, _end)
    return [] if _end <= start

    [start] + range(start + 1, _end)
end


def sum_recur(arr_of_nums)
    return arr_of_nums.first if arr_of_nums.length <= 1

    arr_of_nums.first + sum_recur(arr_of_nums[1..-1])
end

def sum_itera(arr)
    sum = 0
    arr.each { |ele| sum += ele}
    sum
end

def exp1(base, exponent)
    return 1 if exponent == 0

    base * exp1(base, exponent - 1)
end

def exp2(base, exponent)
    return 1 if exponent == 0

    if exponent.even?
      exp2(base, exponent / 2) * exp2(base, exponent / 2)
    else
      base * exp2(base, (exponent - 1) / 2) * exp2(base, (exponent - 1) / 2)
    end
end

def deep_dup(arr)
  return arr if !arr.is_a? Array
  new_arr = []
  arr.each { |ele| new_arr << deep_dup(ele) }
  new_arr
end

def fib(n)
  return [1] if n == 1
  return [1,1] if n == 2

  prev_fibs = fib(n - 1)
  prev_fibs.concat([prev_fibs[-1] + prev_fibs[-2]])
end

def bsearch(arr, target)
    return nil if arr.empty?

    mid = (arr.length - 1) / 2
    return mid if arr[mid] == target

    if target > arr[mid]
        res = bsearch(arr[mid + 1..-1], target)
        !res ? nil : res + arr[0..mid].length
    else
        bsearch(arr[0...mid], target)
    end
end

p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

def merge(left, right)
  merged = []
  i, j = 0, 0
  while i < left.length && j < right.length
    if left[i] < right[j]
      merged << left[i]
      i += 1
    else
      merged << right[j]
      j += 1
    end
  end
  if i < left.length
    merged.concat(left[i..-1])
  end
  if j < right.length
    merged.concat(right[j..-1])
  end
  merged
end

def merge_sort(arr)
  # debugger
  return arr if arr.length <= 1

  mid = (arr.length - 1) / 2
  left = merge_sort(arr[0..mid])
  right = merge_sort(arr[mid + 1..-1])

  merge(left, right)
end

def subsets(arr)
  return [[]] if arr.empty?
  subs = []

  previous = subsets(arr[0..-2])
  previous.each { |ele| subs << (ele.dup << arr[-1]) }

  subs + previous
end
# => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
# p subsets([1, 2, 3])

def permutations(arr)
  return arr[0] if arr.length == 1
  
  
  
end

# loop i = 0 and stops at i < arr.length
# [arr[i]] + [rest of the ]


# while loop through each index of original array
# [1,2,3]
# [1] [2,3]
# [1] [2] [3] => [3]
#     for length of [arr[i], return value of prev func]
#        res << (rotate ^)
#     [3, 2], [2, 3]


# [1,2,3,4,5]
# while loop:
# [1] [2,3,4,5]
# [1] [2,3] [4,5]
# [1] << [2,3] << [4,5]
#                   ^ first
# loop through the pairs and switch them
# [1] << [2,3] << [5,4]
#          ^
# [1] << [3,2] << [5,4]