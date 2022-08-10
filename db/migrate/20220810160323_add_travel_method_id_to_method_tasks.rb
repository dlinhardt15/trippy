class AddTravelMethodIdToMethodTasks < ActiveRecord::Migration[7.0]
  def change
    change_table :method_tasks do |t|
      t.integer :travel_method_id
    end
  end
end
