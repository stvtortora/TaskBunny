class RemoveColumnsFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :location_id
    remove_column :users, :category_id
    remove_column :users, :bio
  end
end
