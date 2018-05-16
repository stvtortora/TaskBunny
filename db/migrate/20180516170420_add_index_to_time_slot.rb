class AddIndexToTimeSlot < ActiveRecord::Migration[5.1]
  def change
    add_index :time_slots, [:time_id, :date_id], unique: true
  end
end
