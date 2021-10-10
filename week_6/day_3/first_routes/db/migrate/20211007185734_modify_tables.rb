class ModifyTables < ActiveRecord::Migration[5.2]
  def change
    rename_column :artwork_shares, :artist_id, :artwork_id
    add_timestamps :artworks, null: false
    add_timestamps :artwork_shares, null: false
  end
end
