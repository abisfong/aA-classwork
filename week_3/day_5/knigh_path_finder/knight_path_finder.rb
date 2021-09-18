require_relative "../poly_tree_node/00_tree_node"

class KnightPathFinder
  @@moves = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
  
  def self.valid_moves(pos)
    moves
      .map { |move| [pos[0] + move[0], pos[1] + move[1]] }
      .select { |move| valid_move?(move) }
  end
  
  def self.valid_move?(pos)
    return false if pos.all? { |coor| coor.between?(0,7) }

    x = (@pos[0] - pos[0]).abs
    y = (@pos[1] - pos[1]).abs
  
    (x == 2 && y == 1) || (x == 1 && y == 2)
  end

  def initialize(pos)
    @pos = pos
    @root_node = TreePolyNode.new(pos)
    @considered_positions = [pos]
    build_move_tree
  end
  
  def build_move_tree
    
  end

  def new_move_positions(pos)
    valid_moves = KnightPathFinder.valid_moves(pos)
    valid_moves.select!.with_index do |move|
      !@considered_positions.include?(move)
    end
    @considered_positions.concat(valid_moves)
    valid_moves
  end

end