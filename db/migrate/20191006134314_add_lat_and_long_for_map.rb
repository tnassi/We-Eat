class AddLatAndLongForMap < ActiveRecord::Migration[5.2]
  def up
    add_column(:restaurants, :latitude, :decimal)
    add_column(:restaurants, :longitude, :decimal)
  end

  def down
    remove_column(:restaurants, :latitude, :decimal)
    remove_column(:restaurants, :longitude, :decimal)
  end
end
