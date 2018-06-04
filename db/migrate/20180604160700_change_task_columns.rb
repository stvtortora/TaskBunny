class ChangeTaskColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :time, :date
    add_column :tasks, :time_slot_id, :integer
  end
end
