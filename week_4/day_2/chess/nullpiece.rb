require 'singleton'
require_relative 'piece'

class NullPiece < Piece
  include Singleton

  def color
    
  end

  def symbol
    
  end
end