# == Schema Information
#
# Table name: goals
#
#  id         :integer          not null, primary key
#  details    :string           not null
#  name       :string           not null
#  status     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
require 'rails_helper'

RSpec.describe Goal, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
