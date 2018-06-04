class AddFilledColumnToTimeSlotRegistrations < ActiveRecord::Migration[5.1]
  def change
    add_column :time_slot_registrations, :filled, :boolean, default: true
  end
end
