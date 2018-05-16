class CreateVehicleRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :vehicle_registrations do |t|
      t.integer :tasker_id, null: false
      t.integer :vehicle_id, null: false
    end
    add_index :vehicle_registrations, :vehicle_id
    add_index :vehicle_registrations, :tasker_id
  end
end
