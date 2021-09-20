require_relative "poly_tree_node"

class KnightPathFinder
  @@moves = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
  
  def self.valid_moves(pos)
    @@moves
      .map { |move| [pos[0] + move[0], pos[1] + move[1]] }
      .select { |move| valid_move?(move) }
  end
  
  def self.valid_move?(pos)
    return false unless pos.all? { |coor| coor.between?(0,7) }
    return true
  end

  def initialize(pos)
    @pos = pos
    @root_node = PolyTreeNode.new(pos)
    @considered_positions = [pos]
    build_move_tree
  end
  
  def build_move_tree
    queue = [@root_node]
    while !queue.empty?
      curr_node = queue.shift
      new_moves = new_move_positions(curr_node.value)
      new_moves.each do |move|
        move_node = PolyTreeNode.new(move)
        curr_node.add_child(move_node)
        queue << move_node
      end
    end
  end

  def new_move_positions(pos)
    valid_moves = KnightPathFinder.valid_moves(pos)
    valid_moves.reject! { |move| @considered_positions.include?(move) }
    @considered_positions.concat(valid_moves)
    valid_moves
  end

end

# a = KnightPathFinder.new([4,3])
# p KnightPathFinder.valid_moves([0,0])
# p a.new_move_positions([3,5])