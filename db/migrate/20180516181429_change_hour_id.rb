class ChangeHourId < ActiveRecord::Migration[5.1]
  def change
    remove_column :time_slots, :hour_id
    add_column :time_slots, :hour_id, :integer, null: false
  end
end
