require_relative 'pawn'
require_relative 'bishop'
require_relative 'king'
require_relative 'knight'
require_relative 'nullpiece'
require_relative 'queen'
require_relative 'rook'


class Board

  def initialize
    @rows = Array.new(8) {Array.new(8, NullPiece.instance)}
    set_up_board 
  end

  def move_piece(start_pos, end_pos)
    raise Exception.new "No available piece" if self[start_pos].empty?
    raise Exception.new "Invalid move" unless self[end_pos].empty? #DONE - need to readdress when null pieces come into play

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
    pieces = {
      :P => pawn_positions,
      :R => [ [0,0], [0,7], [7,0], [7,7] ],
      :N => [ [0,1], [0,6], [7,1], [7,6] ],
      :B => [ [0,2], [0,5], [7,2], [7,5] ],
      :Q => [ [1,4], [7,4] ],
      :K => [ [1,3], [7,3] ]
    }

    pieces.each do |piece_sym, positions|
      positions.each do |pos|
        color = pos.first <= 1 ? :black : :white
        case piece_sym
        when :P
          @board[pos] = Pawn.new(color, @board, pos)
        when :R
          @board[pos] = Rook.new(color, @board, pos)
        when :N
          @board[pos] = Knight.new(color, @board, pos)
        when :B
          @board[pos] = Bishop.new(color, @board, pos)
        when :Q
          @board[pos] = Queen.new(color, @board, pos)
        when :K
          @board[pos] = King.new(color, @board, pos)
        end
      end 
    end
  end

  def pawn_positions
    pawn_pos = []
    [1,6].each { |row_no| (0..7).each { |col_no| pawn_pos << [row_no, col_no] } }
    pawn_pos
  end

end

b = Board.new