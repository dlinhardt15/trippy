class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.date :departure_date
      t.integer :user_id
      t.integer :travel_method_id

      t.timestamps
    end
  end
end
