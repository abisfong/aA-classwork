class ModifyUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    rename_column :users, :name, :username
    add_index :users, :username, unique: true
  end
end
