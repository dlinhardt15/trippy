class Trip < ApplicationRecord
    belongs_to :user
    has_one :travel_method
    has_many :tasks
end
