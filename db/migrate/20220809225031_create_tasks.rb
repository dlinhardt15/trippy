class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.integer :due_date
      t.boolean :complete, null: false
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
