class CreateCategoryRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :category_registrations do |t|
      t.integer :tasker_id, null: false
      t.integer :category_id, null: false
    end
    add_index :category_registrations, :tasker_id
    add_index :category_registrations, :category_id
  end
end
