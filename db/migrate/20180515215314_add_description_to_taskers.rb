class AddDescriptionToTaskers < ActiveRecord::Migration[5.1]
  def change
    add_column :taskers, :description, :string
  end
end
