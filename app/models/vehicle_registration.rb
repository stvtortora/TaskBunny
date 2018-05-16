class VehicleRegistration < ApplicationRecord
  validates :tasker, :vehicle,  presence: true
  validates :tasker, uniqueness: {scope: :vehicle}

  belongs_to :tasker

  belongs_to :vehicle
end
