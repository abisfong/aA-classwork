require 'singleton'
require_relative 'piece'

class NullPiece < Piece
  include Singleton


  def color
    nil
  end

  def symbol
    nil
  end

  def inspect
    "[ ]"
  end

  def empty?
    true
  end
end