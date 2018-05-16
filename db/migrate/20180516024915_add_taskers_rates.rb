class AddTaskersRates < ActiveRecord::Migration[5.1]
  def change
    add_column :taskers, :rate, :string, null: false
  end
end
