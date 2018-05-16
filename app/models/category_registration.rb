class CategoryRegistration <ApplicationRecord
  validates :tasker, :category,  presence: true

  belongs_to :tasker

  belongs_to :category
end
