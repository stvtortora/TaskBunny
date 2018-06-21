class AddUserSti < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :location_id, :integer
    add_column :users, :description, :string
    add_column :users, :rate, :string
  end
end
