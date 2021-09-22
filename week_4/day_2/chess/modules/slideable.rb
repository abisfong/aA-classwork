module Slideable
  #@color, @board, @pos (from piece class)

  def moves #returns a array of places that it can move to
    possible_moves = []
    move_dirs.each do |move_dir|
      dy, dx = move_dir
      possible_moves.concat(grow_unblocked_moves_in_dir(dx, dy))
    end
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
  end
end