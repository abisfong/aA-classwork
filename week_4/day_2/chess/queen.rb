require_relative 'piece'

class Queen < Piece
  #@color, @board, @pos 

  include Slideable

  def symbol
  end

  protected

  def move_dirs
    [*horizontal_dirs, *diagonal_dirs]
  end
end