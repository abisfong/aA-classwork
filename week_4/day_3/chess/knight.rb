require_relative 'piece'
require_relative 'modules/stepable'

class Knight < Piece
  #@color, @board, @pos 

  include Stepable

  def symbol
    :N
  end

  protected

  def move_diffs
      [[-1, -2], [-1, 2], [1, -2],[1, 2],
      [-2, -1], [-2, 1], [2, -1],[2, 1]]
  end
end