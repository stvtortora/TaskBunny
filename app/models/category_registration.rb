class CategoryRegistration <ApplicationRecord
  validates :tasker, :category,  presence: true
  validates :tasker, uniqueness: {scope: :category}

  belongs_to :tasker

  belongs_to :category
end
