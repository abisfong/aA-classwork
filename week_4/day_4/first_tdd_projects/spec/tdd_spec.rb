describe Array do 
  #remove dups
  describe "#my_uniq" do
  #[1, 2, 1, 3, 3].uniq # => [1, 2, 3]
  let(:arr) {[1, 2, 1, 3, 3]}
    context "if array is not empty" do
      it "should return unique elements" do
        expect(arr.my_uniq).to eq([1, 2, 3])
      end
    end

    context "if array is empty" do
      it "should return empty arr" do
        expect([].my_uniq).to eq([])
      end
    end
end