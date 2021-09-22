module Stepable
  #@color, @board, @pos (from piece class)

  def moves #need to account for opposing/same color
    all_moves = []
    move_diffs.each do |move| 
      all_move = [@pos.first + move.first, @pos.last + move.last] 
      if @board.valid_pos?(all_move) && (@board[all_move].empty? || @color != @board[all_move].color)
        all_moves << all_move 
      end
    end
    all_moves
  end

  private

  def move_diffs #overritten by subclass

  end

end