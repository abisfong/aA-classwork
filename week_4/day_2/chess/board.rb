require_relative 'piece'

class Board

  def initialize
    @rows = Array.new(8) {Array.new(8, nil)}
    set_up_board 
  end

  def move_piece(start_pos, end_pos)
    raise Exception.new "No available piece" if !self[start_pos]
    raise Exception.new "Invalid move" if self[end_pos] #need to readdress when null pieces come into play

    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
  end

  def valid_pos?(pos)
    pos.all? { |coord| coord.between?(0, 7) }
  end

  def [](pos)
    r, c = pos
    @rows[r][c]
  end

  def []=(pos, piece)
    r, c = pos
    @rows[r][c] = piece
  end

  private
  def set_up_board
    [0,1,6,7].each do |row_idx|
      @rows[row_idx] = Array.new(8) { |i| i = Piece.new }
    end
  end
end