class ChangeDepartureDateDataType < ActiveRecord::Migration[7.0]
  def change
    change_table :trips do |t|
      t.remove :departure_date
      t.date :departure_date
    end
  end
end
