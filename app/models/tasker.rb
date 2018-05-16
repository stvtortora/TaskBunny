class Tasker <ApplicationRecord
  validates :name, :location, presence: true

  belongs_to :location

  has_many :time_slot_registrations

  has_many :time_slots,
    through: :time_slot_registrations,
    source: :time_slot

  has_many :category_registrations

  has_many :categories,
    through: :category_registrations,
    source: :category

  has_many :size_registrations

  has_many :sizes,
    through: :size_registrations,
    source: :size

  has_many :vehicle_registrations

  has_many :vehicles,
    through: :vehicle_registrations,
    source: :vehicle
end
