class DropTaskersClientsTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :taskers
    drop_table :clients
  end
end
