class Location <ApplicationRecord
  validates :title, presence: true

  has_many :taskers
end
