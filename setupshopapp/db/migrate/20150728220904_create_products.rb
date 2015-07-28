class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :image
      t.float :price
      t.references :shop, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
