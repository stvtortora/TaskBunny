class RemoveTaskerIdFromTimeSlots < ActiveRecord::Migration[5.1]
  def change
    remove_column :time_slots, :tasker_id
  end
end
