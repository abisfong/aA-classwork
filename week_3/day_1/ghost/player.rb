class Player

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def guess
    print "#{@name}, enter your guess: "
    gets.chomp
  end

  def alert_invalid_guess
    puts "#{self.name}: invalid guess"
  end

end