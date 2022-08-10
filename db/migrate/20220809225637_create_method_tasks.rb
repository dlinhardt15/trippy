class CreateMethodTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :method_tasks do |t|
      t.string :name
      t.string :description
      t.datetime :due_date
      t.boolean :complete
      

      t.timestamps
    end
  end
end
