require_relative 'board'

class Pawn < Piece
  # attr_accessor :pos from Piece class
  # attr_reader :color

  def move_dirs
    moves = [forward_dir * forward_steps * 1,0]
    moves + side_attacks
  end

  private

  def at_start_row?
    return true if @pos.first == 1 && forward_dir == 1 
    return true if @pos.first == 6 && forward_dir == -1 
    false
  end

  def forward_dir
    #returns 1 or -1
  end

  def forward_steps
  end

  def side_attacks #this returns an array of possible side attach pos
  end

end