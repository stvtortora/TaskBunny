class TimeSlotRegistrations <ApplicationRecord
  validates :tasker, :time_slot,  presence: true

  belongs_to :tasker

  belongs_to :time_slot
end
