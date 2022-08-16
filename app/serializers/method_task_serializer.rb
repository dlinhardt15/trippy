class MethodTaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :complete, :due_date, :travel_method_id
end
