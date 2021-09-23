require 'singleton'
require_relative 'piece'

class NullPiece < Piece
  include Singleton


  def color
    nil
  end

  def symbol
    " "
  end

  def inspect
    "_"
  end

  def empty?
    true
  end
end