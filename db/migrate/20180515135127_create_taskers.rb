class CreateTaskers < ActiveRecord::Migration[5.1]
  def change
    create_table :taskers do |t|
      t.text :name, null: false
      t.integer :location_id, null: false
    end
  end
end
