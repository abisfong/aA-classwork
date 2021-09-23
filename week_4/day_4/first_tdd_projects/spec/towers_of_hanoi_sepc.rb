describe TowerOfHanoi do
  describe "#initialize" do
    subject(:toa) {TowerOfHanoi.new(8)}
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

  
end

