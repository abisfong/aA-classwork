class Piece
  attr_accessor :pos
  attr_reader :color

  def initialize(color, board, pos=nil)
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
  end

  def pos=(val)
  end

  def symbol
  end

  private 

  def move_into_check?(end_pos)
  end


end