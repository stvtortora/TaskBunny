class Task < ApplicationRecord
  validates :category, :location, :tasker, :user, :time_slot, presence: true

  belongs_to :category

  belongs_to :location

  belongs_to :tasker

  belongs_to :user

  belongs_to :time_slot
end
