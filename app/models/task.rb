class Task < ApplicationRecord
  validates :category, :location, :tasker, :user, :time, :date, presence: true

  belongs_to :category

  belongs_to :location

  belongs_to :tasker

  belongs_to :user
end
