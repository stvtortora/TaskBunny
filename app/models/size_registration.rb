class SizeRegistration < ApplicationRecord
  validates :tasker, :size,  presence: true
  validates :tasker, uniqueness: {scope: :size}

  belongs_to :tasker

  belongs_to :size
end
