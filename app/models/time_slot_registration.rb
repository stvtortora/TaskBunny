class TimeSlotRegistration <ApplicationRecord
  validates :tasker, :time_slot, :filled, presence: true
  validates :tasker, uniqueness: {scope: :time_slot}

  belongs_to :tasker

  belongs_to :time_slot

  def toggle_status
    self.filled = !self.filled
    self.save!
  end
end
