# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
# let(:user) {User.new(username: "")}
  describe "Validations" do
    it {should validate_presence_of(:username)}
    it {should validate_presence_of(:password_digest)}
    it {should validate_presence_of(:session_token)}
    it {should validate_length_of(:password).is_at_least(6)}
    
    describe "uniqueness" do
      before :each do
        create(:user)
      end

      it {should validate_uniqueness_of(:username)}
      it {should validate_uniqueness_of(:session_token)}
    end
  end
  
  describe "Associations" do
    it {should have_many(:goals)}
    it {should have_many(:comments)}
  end

  describe "SPIRE" do
    let!(:user) { create(:user) }

    describe "self.find_by_credentials" do
      context "with valid credentials" do
        it "should return user" do
          expect(User.find_by_credentials(User.last.username, "password")).to eq(user)
        end
      end
      context "with invalid credentials" do
        it "should return user" do
          expect(User.find_by_credentials(User.last.username, "passwo")).to be_nil
        end
      end
    end

    describe "is_valid_password?" do
      context "with a valid password" do
        it "should return true" do
          expect(user.is_valid_password?("password")).to be true
        end
      end

      context "with an invalid password" do
        it "should return true" do
          expect(user.is_valid_password?("passwo")).to be false
        end
      end
    end
  end
end
