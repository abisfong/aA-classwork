class Piece
  def initialize(color, board, pos=[])
    @color = color
    @board = board
    @pos = pos
  end

  def to_s
    "#{@color}, #{@pos}"
  end

  def empty?
  end
end