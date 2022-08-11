class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  has_many :trips
  has_many :tasks, through: :trips
  has_many :method_tasks, through: :trips
end
