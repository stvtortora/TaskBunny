class ChangeTaskUserColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :user_id
    add_column :tasks, :client_id, :integer
  end
end
