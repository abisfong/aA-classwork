require "towers_of_hanoi"

describe TowerOfHanoi do
  subject(:toa) {TowerOfHanoi.new(8)}

  describe "#initialize" do
    it "should accept size as an argument" do
      expect(toa.size).to eq(8)
    end
    it "should initialize 2D arrays to represent towers" do
      expect(toa.towers.all?{|tower| tower.is_a?(Array)}).to eq(true)
    end
    
    it "should store all discs in first row with decreasing order" do
      expect(toa.towers).to eq([[8,7,6,5,4,3,2,1],[],[]])
    end
  end

  describe "#move_discs" do
    it "gets start pile and end pile position" do
      res = toa.move_discs
      expect(res.length == 2 && res.all? {|pos| pos.is_a?(Integer)}).to eq(true)
      expect(toa.move_discs).to receive(:gets)
    end
  end  
end

