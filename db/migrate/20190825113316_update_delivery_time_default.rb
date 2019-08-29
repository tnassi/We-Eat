class UpdateDeliveryTimeDefault < ActiveRecord::Migration[5.2]
  def up
    rename_column(:restaurants, :delivery_time, :maximum_delivery_time)
    change_column(:restaurants, :maximum_delivery_time, :integer)
    change_column_default(:restaurants, :maximum_delivery_time, from: nil, to: 1)
  end

  def down
    rename_column(:restaurants, :maximum_delivery_time, :delivery_time)
    change_column(:restaurants, :maximum_delivery_time, :time)
    change_column_default(:restaurants, :delivery_time, from: 1, to: nil)
  end
end
