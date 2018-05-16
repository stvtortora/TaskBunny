class ChangeTimeSlotIndexes < ActiveRecord::Migration[5.1]
  def change
    remove_index :time_slots, [:time_id, :date_id]
    remove_column :time_slots, :date_id
    add_column :time_slots, :day_id, :integer, null: false
    add_index :time_slots, [:time_id, :day_id], unique: true
  end
end
