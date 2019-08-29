class UpdateTenBisColumnName < ActiveRecord::Migration[5.2]
  def up
    rename_column(:restaurants, "10bis", :accepts_ten_bis)
  end

  def down
    rename_column(:restaurants, :accepts_ten_bis, "10Bis")
  end
end
