class VehicleRegistration < ApplicationRecord
  validates :tasker, :vehicle,  presence: true

  belongs_to :tasker

  belongs_to :vehicle
end
