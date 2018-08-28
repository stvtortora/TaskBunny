class TimeSlotRegistration < ApplicationRecord
  validates :tasker, :time_slot, presence: true
  validates :filled, inclusion: {in: [true, false]}
  validates :tasker, uniqueness: {scope: :time_slot}

  after_initialize :ensure_filled

  belongs_to :tasker

  belongs_to :time_slot

  
  def toggle_status
    self.filled = !self.filled
    self.save!
  end

  private

  def ensure_filled
    self.filled ||= false
  end
end
