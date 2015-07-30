class RenameOrdersProductsTable < ActiveRecord::Migration
  def change
  	rename_table :orders_products_tables, :orders_products
  end
end