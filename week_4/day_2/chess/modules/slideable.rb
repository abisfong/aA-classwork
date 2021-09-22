module Slideable
  #@color, @board, @pos (from piece class)

  def moves #returns a array of places that it can move to
    possible_moves = []
    move_dirs.each do |move_dir|
      dy, dx = move_dir
      possible_moves.concat(grow_unblocked_moves_in_dir(dx, dy))
    end
    possible_moves
    #use moves_dirs here
    #uses grow unblocked moves
  end

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end
  
  private
  HORIZONTAL_DIRS = [ [0,1], [1,0], [0,-1], [-1,0] ]
  DIAGONAL_DIRS = [ [1,1], [1,-1], [-1,1], [-1,-1] ]
  
  def move_dirs #indicate which direction it can move
    
  end

  def grow_unblocked_moves_in_dir(dx,dy)
    # Add dx and dy to @pos and return array of all unblock positions
    # Add logic for when to stop
    moves = []

    next_pos = [@pos.first + dy, @pos.last + dx]
    while @board[next_pos].is_a?(NullPiece)
      moves << next_pos
      next_pos = [next_pos.first + dy, next_pos.last + dx]
    end

    moves
  end
end