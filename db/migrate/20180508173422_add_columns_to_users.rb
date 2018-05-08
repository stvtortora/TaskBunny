class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :bio, :string
    add_column :users, :location_id, :integer
    add_column :users, :category_id, :integer
  end
end
