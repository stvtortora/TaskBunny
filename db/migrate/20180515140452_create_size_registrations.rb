class CreateSizeRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :size_registrations do |t|
      t.integer :tasker_id, null: false
      t.integer :size_id, null: false
    end
    add_index :size_registrations, :size_id
    add_index :size_registrations, :tasker_id
  end
end
