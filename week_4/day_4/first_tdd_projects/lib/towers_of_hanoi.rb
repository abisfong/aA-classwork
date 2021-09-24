class TowerOfHanoi
  attr_reader :size, :towers

  def initialize(size)
    @size = size
    @towers = [(1..size).to_a.reverse, [], []]
  end

  def move_discs
    puts "Please choose which pile of disc to choose from:"
    start_pos = gets.chomp.to_i
    puts "Please choose which pile to put the disc:"
    end_pos = gets.chomp.to_i
    return [start_pos, end_pos]
  end
end