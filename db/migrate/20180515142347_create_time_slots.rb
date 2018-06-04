class CreateTimeSlots < ActiveRecord::Migration[5.1]
  def change
    create_table :time_slots do |t|
      t.integer :tasker_id, null: false,
    end
  end
end
