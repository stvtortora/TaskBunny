class ChangeFilledColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :time_slot_registrations, :filled
    add_column :time_slot_registrations, :filled, :boolean, default: false
  end
end
