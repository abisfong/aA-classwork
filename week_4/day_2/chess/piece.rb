class Piece
  attr_accessor :pos
  attr_reader :color

  def initialize(color=nil, board=nil, pos=nil)
    @color = color
    @board = board
    @pos = pos
  end

  def to_s
    "#{@color}, #{@pos}"
  end

  def empty?
    false
  end

  def valid_moves
    # return false if !self[pos].empty? && self[pos].color == ???

    # return false unless self[pos].empty?

    # dirs_hash = Hash.new { |h, k| h[k] = Array.new }
    # possible_dirs.each { |dir| dirs_hash[dir] << [dir.first + @pos.first, dir.last + @pos.last] }
    # dirs_hash.keys.select do |dir| 
    #   dirs_hash[dir].any? { |pos| @board[pos].color != @color && @board.valid_pos?(pos) }
    # end
  end

  def pos=(val)
  end

  def symbol
    :X #for testing only
  end

  def inspect
    "#{self.symbol}"
  end

  private 

  def move_into_check?(end_pos)
  end


end