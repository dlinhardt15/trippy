class ChangeDueDateDateType < ActiveRecord::Migration[7.0]
  def change
    change_table :method_tasks do |t|
      t.remove :due_date
      t.integer :due_date
    end
    change_table :tasks do |t|
      t.remove :due_date
      t.integer :due_date
    end
  end
end
