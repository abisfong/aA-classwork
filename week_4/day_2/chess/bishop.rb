require_relative 'piece'
require_relative 'modules/slideable'

class Bishop < Piece
  #@color, @board, @pos 

  include Slideable

  def symbol
    :B
  end

  protected

  def move_dirs
    diagonal_dirs
  end
end