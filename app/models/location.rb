class Location <ApplicationRecord
  validates :title, presence: true

  has_many :tasks

  has_many :taskers
end
