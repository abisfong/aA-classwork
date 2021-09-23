require 'colorize'
require_relative 'cursor'
require_relative 'board'

class Display

  attr_reader :cursor
  def initialize(board)
    @board = board
    @cursor = Cursor.new([0,0], @board)
  end

  def render
    puts "  #{(0..7).to_a.join(" ")}"
    (0..7).each do |row_num|
      print "#{row_num} "
      (0..7).each do |col_num|
        piece_s = @board[[row_num, col_num]].to_s
        color = @board[[row_num, col_num]].color
        if @cursor.cursor_pos == [row_num, col_num]
          if @cursor.selected 
            print "#{piece_s.colorize(:green)} ".on_blue
          else
            print "#{piece_s.colorize(color)} ".on_blue
          end
        else
          print "#{piece_s.colorize(color)} ".on_light_red
        end
      end 
      puts
    end
    #print out all grid in string with pieces
    #wherever cursor is, color should be differnt
  end

end

d = Display.new(Board.new)
while true
  d.render
  d.cursor.get_input
  sleep(0.5)
  system("clear")
end