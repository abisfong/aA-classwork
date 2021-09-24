def first_anagram(str_1, str_2)
  str_1
    .split("")
    .permutation
    .each do |perm|
      return true if perm.join("") == str_2
    end
  false
end

def second_anagram(str_1, str_2)
  str_1.chars.each do |char|
    str_2.slice!(char)
  end
  str_2.length == 0
end

# p second_anagram("gizmo", "sally")
# p second_anagram("elvis", "lives")

def third_anagram(str_1, str_2)

  str_1.chars.sort == str_2.chars.sort

end

#  p third_anagram("gizmo", "sally")
#  p third_anagram("elvis", "lives")

def fourth_anagram(str_1, str_2)
  char_counts = Hash.new(0)

  str_1.each_char do |char|
    char_counts[char] += 1
  end

  str_2.each_char do |char|
    char_counts[char] -= 1
  end

  char_counts.all? {|_, value| value == 0 }
end
 p fourth_anagram("gizmo", "sally")
 p fourth_anagram("elvis", "lives")