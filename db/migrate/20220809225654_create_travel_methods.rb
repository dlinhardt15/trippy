class CreateTravelMethods < ActiveRecord::Migration[7.0]
  def change
    create_table :travel_methods do |t|
      t.string :name

      t.timestamps
    end
  end
end
