class FixColumnNameinShopsTable < ActiveRecord::Migration
  def change
  	rename_column :shops, :shopowner_id, :shopkeeper_id
  end
end
