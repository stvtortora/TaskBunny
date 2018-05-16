class AddIndexesToTimeSlotRegistrations < ActiveRecord::Migration[5.1]
  def change
    add_index :time_slot_registrations, [:tasker_id, :time_slot_id], unique: true
  end
end
