class RenameDatesToDays < ActiveRecord::Migration[5.1]
  def change
    rename_table :dates, :days
  end
end
