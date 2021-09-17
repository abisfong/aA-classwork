require_relative "./player.rb"

class Game

  def initialize(*players)
    @players = players
    @current_player = 0
    @fragment = ""
    @losses = {}
    @players.each {|player| @losses[player] = 0}

    file = File.open("dictionary.txt")
    words = file.readlines.map(&:chomp)

    @dictionary = Hash.new(false)
    words.each { |word| @dictionary[word] = true }
  end

  def current_player
    @players[@current_player]
  end

  def prev_player
    prev_player_index = (@current_player - 1) % @players.length
    @players[prev_player_index]
  end

  def next_player!
    @current_player = (@current_player + 1) % @players.length
  end

  def take_turn(player)
    input = ""
    until self.valid_play?(input = player.guess)
      player.alert_invalid_guess
    end
    @fragment += input
  end

  def valid_play?(string)
    return false if !("a".."z").to_a.include?(string)
    potential_fragment = @fragment + string
    @dictionary.keys.any? {|word| word.start_with?(potential_fragment)}
  end

  def lose?
    @dictionary[@fragment]
  end

  def record(player)
    end_idx = @losses[player]
    "GHOST"[0...end_idx]
  end

  def play_round
    while !self.lose?
      take_turn(self.current_player)
      self.next_player!
      puts "Fragment: #{@fragment}"
    end
    @losses[self.prev_player] += 1
    @fragment = ""
  end

  def run
    while @players.length > 1
      display_standings
      self.play_round
      if @losses.values.any?(5)
        @players.select! { |player| @losses[player] < 5 }
      end
    end
    puts "#{@players.first.name} wins!"
  end

  def display_standings
    @players.each do |player|
      puts "#{player.name}: #{self.record(player)}"
    end
  end
end