class CreateTimeSlotRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :time_slot_registrations do |t|
      t.integer :tasker_id, null: false
      t.integer :time_slot_id, null: false
    end
  end
end
