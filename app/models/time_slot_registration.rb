class TimeSlotRegistration <ApplicationRecord
  validates :tasker, :time_slot,  presence: true
  validates :tasker, uniqueness: {scope: :time_slot}

  belongs_to :tasker

  belongs_to :time_slot
end
