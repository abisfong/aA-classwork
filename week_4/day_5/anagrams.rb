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
  
end

# p first_anagram("gizmo", "sally")
# p first_anagram("elvis", "lives")