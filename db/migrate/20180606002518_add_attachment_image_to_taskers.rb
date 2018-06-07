class AddAttachmentImageToTaskers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :taskers do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :taskers, :image
  end
end
