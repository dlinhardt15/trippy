class Task < ApplicationRecord
  belongs_to :trip
  default_scope { order(due_date: :desc) }
end
