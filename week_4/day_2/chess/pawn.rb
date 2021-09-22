require_relative 'board'

class Pawn < Piece
  # attr_accessor :pos from Piece class
  # attr_reader :color

  def move_dirs
    moves = [forward_dir * forward_steps,0]
    side_attacks << moves
  end

  private

  def at_start_row?
    return true if @pos.first == 1 && @color == :black
    return true if @pos.first == 6 && @color == :white 
    false
  end

  def forward_dir
    #returns 1 or -1
    @color == :white ? -1 : 1
  end

  def forward_steps
    at_start_row? ? 2 : 1
  end

  def side_attacks #this returns an array of possible side attach pos
    [[forward_dir,-1], [forward_dir, 1]]
  end

end