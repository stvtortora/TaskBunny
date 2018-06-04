class RemoveDateFromTasks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :date
  end
end
