class Category <ApplicationRecord
  validates :title, presence: true

  has_many :category_registrations

  has_many :taskers,
    through: :category_registrations,
    source: :tasker
end
