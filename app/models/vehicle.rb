class Vehicle <ApplicationRecord
  validates :title, presence: true

  has_many :vehicle_registrations

  has_many :taskers,
    through: :vehicle_registrations,
    source: :tasker
end
