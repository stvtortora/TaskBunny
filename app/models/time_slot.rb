class TimeSlot <ApplicationRecord
  validates :day, :hour, presence: true
  validates :hour, uniqueness: {scope: :day}

  belongs_to :day

  belongs_to :hour

  has_many :time_slot_registrations

  has_many :tasks

  has_many :taskers,
  through: :time_slot_registrations,
  source: :tasker
end
