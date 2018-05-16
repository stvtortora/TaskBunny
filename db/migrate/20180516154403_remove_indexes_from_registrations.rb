class RemoveIndexesFromRegistrations < ActiveRecord::Migration[5.1]
  def change
    remove_index :category_registrations, :category_id
    remove_index :category_registrations, :tasker_id
    remove_index :size_registrations, :size_id
    remove_index :size_registrations, :tasker_id
    remove_index :vehicle_registrations, :vehicle_id
    remove_index :vehicle_registrations, :tasker_id
  end
end
