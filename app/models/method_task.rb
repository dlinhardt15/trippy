class MethodTask < ApplicationRecord
  belongs_to :travel_method
  default_scope { order(due_date: :desc) }
end
