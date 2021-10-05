class UpdateResponses < ActiveRecord::Migration[5.2]
  def change
    remove_column :responses, :question_id
    add_column :responses, :user_id, :integer, null: false
  end
end
