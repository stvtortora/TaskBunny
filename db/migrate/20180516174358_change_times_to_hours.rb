class ChangeTimesToHours < ActiveRecord::Migration[5.1]
  def change
    rename_table :times, :hours
    remove_column :time_slots, :time_id
    add_column :time_slots, :hour_id, :string, null: false
    add_index :time_slots, [:hour_id, :day_id], unique: true
  end
end
