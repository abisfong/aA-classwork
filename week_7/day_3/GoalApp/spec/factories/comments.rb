# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  goal_id    :integer          not null
#  user_id    :integer          not null
#
FactoryBot.define do
  factory :comment do
    
  end
end
