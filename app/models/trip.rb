class Trip < ApplicationRecord
    belongs_to :user
    belongs_to :travel_method
    has_many :tasks, dependent: :destroy
    has_many :method_tasks, through: :travel_method

    validates :name, :departure_date, :travel_method_id, presence: true
    default_scope { order(departure_date: :asc) }
end
