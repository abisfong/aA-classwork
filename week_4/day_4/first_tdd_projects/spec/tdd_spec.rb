require "tdd"

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

  describe "#two_sum" do
    context "if array is not empty" do
      it "should return all pairs of positions where the corresponding elements sum to 0" do
        expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
      end

      it "should find pairs with same element" do
        expect([5, -5, -5].two_sum).to eq([[0, 1], [0, 2]])
      end

      it "should return empty array if no pair found" do
        expect([1, 2, 7, 4].two_sum).to eq([])
      end
    end
    
    context "if array is empty" do
      it "should return empty array " do
        expect([].two_sum).to eq([])
      end
    end
  end

  describe "#my_transpose" do
    context "if matrix is not empty" do
      it

    end

    context "if matrix is empty" do
    end


end