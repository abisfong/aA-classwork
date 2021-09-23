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
      it "should raise error if all rows are not the same length" do
        expect{[
          [0, 1, 2],
          [3, 4],
          [6, 7, 8]
        ].my_transpose
        }.to raise_error("Invalid matrix")
      end

      it "should raise error if it's not a 2D matrix" do
        expect{[1,2,3].my_transpose}.to raise_error("Invalid matrix")
      end

      it "transposes the matrix" do
        expect([
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8]
        ].my_transpose
        ).to eq([
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8]
        ])
      end
  end

    context "if matrix is empty" do
      it "raise error" do
        expect{[].my_transpose}.to raise_error("Empty matrix")
      end
    end
  end
end

describe "#stock_picker" do
  context "if the argument array is not empty" do
    it "should raise error if argument array length is 1" do
      expect{stock_picker([10])}.to raise_error("Not enough stock price information")
    end
    
    it "should return the most most profitable pair of days" do
      expect(stock_picker([30, 40, 20, 15, 35])).to eq([3, 4])
    end
  end

  context "if the argument array is empty" do
    it "should raise error" do
      expect{stock_picker([])}.to raise_error("No stock price information")
    end
  end
end