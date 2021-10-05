class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many :authored_polls,
    class_name: :Polls,
    primary_key: :id,
    foreign_key: :author_id
  
  has_many :responses,
    class_name: :Response,
    primary_key: :id,
    foreign_key: :user_id
end
