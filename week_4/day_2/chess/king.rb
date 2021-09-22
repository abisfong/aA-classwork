require_relative 'piece'
require_relative 'modules/stepable'

class King < Piece
  #@color, @board, @pos 

  include Slideable

  def symbol
    :K
  end

  protected

  def move_diffs
    [ [0,1], [1,0], [0,-1], [-1,0],
    [1,1], [-1,1], [1,-1], [-1,-1] ]
  end
end