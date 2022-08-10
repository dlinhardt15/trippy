class MethodTaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :complete, :due_date
end
