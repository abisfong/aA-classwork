module Slideable
  #@color, @board, @pos (from piece class)

  def moves #returns a array of places that it can move to
    self.move_dirs
    #use moves_dirs here
    #uses grow unblocked moves
  end

  def horizontal_dirs
    [ [0,1], [1,0], [0,-1], [-1,0] ]
  end

  def diagonal_dirs
    [ [1,1], [1,-1], [-1,1], [-1,-1] ]
  end

  private

  def move_dirs #indicate which direction it can move
    
  end

  def grow_unblocked_moves_in_dir(dx,dy)

  end
end