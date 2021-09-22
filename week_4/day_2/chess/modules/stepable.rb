module Stepable
  #@color, @board, @pos (from piece class)

  def moves
    move_diffs.map { |move| [@pos.first + move.first, @pos.last + move.last] }
  end

  private

  def move_diffs #overritten by subclass

  end

end