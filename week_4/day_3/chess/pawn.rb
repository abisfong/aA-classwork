require_relative 'board'
require_relative 'piece'
require_relative 'modules/stepable.rb'

class Pawn < Piece
  # attr_accessor :pos from Piece class
  # attr_reader :color

  include Stepable
  
  def symbol
    :P 
  end

  protected

  def move_diffs #need to edit to #move
    moves = []
    (1..forward_steps).each do |forw_step|
      moves << [forward_dir * forw_step,0]
    end
    moves += side_attacks #just move diffs array
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
    [[forward_dir,-1], [forward_dir, 1]].select do |move_diff|
      end_pos = [ @pos.first + move_diff.first, @pos.last + move_diff.last ]
      @board.valid_pos?(end_pos) && !@board[end_pos].empty? && @board[end_pos].color != @color
    end
  end

end