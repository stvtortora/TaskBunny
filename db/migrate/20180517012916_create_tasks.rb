class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :category_id, null: false
      t.integer :location_id, null: false
      t.integer :tasker_id, null: false
      t.integer :user_id, null: false
      t.string :time, null: false
      t.string :date, null: false
    end
  end
end
