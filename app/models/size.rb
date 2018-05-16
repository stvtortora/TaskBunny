class Size <ApplicationRecord
  validates :title, presence: true

  has_many :size_registrations

  has_many :taskers,
    through: :size_registrations,
    source: :tasker
end
