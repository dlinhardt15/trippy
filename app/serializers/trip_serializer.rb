class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure_date, :travel_method_id
  has_many :method_tasks, through: :travel_method
  has_many :tasks
end
