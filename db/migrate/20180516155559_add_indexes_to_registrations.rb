class AddIndexesToRegistrations < ActiveRecord::Migration[5.1]
  def change
    add_index :category_registrations, [:tasker_id, :category_id], unique: true
    add_index :size_registrations, [:tasker_id, :size_id], unique: true
    add_index :vehicle_registrations, [:tasker_id, :vehicle_id], unique: true
  end
end
