class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :complete, :due_date
end
