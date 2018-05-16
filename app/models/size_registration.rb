class SizeRegistration < ApplicationRecord
  validates :tasker, :size,  presence: true

  belongs_to :tasker

  belongs_to :size
end
