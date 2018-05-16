class TimeSlot <ApplicationRecord
  validates :date, :time, presence: true

  has_many :time_slot_registrations

  has_many :taskers,
  through: :time_slot_registrations,
  source: :tasker
end
