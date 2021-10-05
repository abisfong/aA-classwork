class Response < ApplicationRecord
  validates :answer_choice_id, presence: true
  validates :user_id, presence: true

  belongs_to :answer_choice,
    class_name: :AnswerChoice,
    primary_key: :id,
    foreign_key: :answer_choice_id

  belongs_to :respondent,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
