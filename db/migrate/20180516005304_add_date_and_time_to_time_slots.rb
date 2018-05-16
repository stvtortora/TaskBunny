class AddDateAndTimeToTimeSlots < ActiveRecord::Migration[5.1]
  def change
    add_column :time_slots, :date, :string, null: false
    add_column :time_slots, :time, :string, null: false
  end
end
