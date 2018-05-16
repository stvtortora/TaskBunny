class ChangeTimeSlotColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :time_slots, :date
    remove_column :time_slots, :time
    add_column :time_slots, :date_id, :integer
    add_column :time_slots, :time_id, :integer
  end
end
