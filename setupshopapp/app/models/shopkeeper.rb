class Shopkeeper < ActiveRecord::Base
  belongs_to :user
  has_one :shop
end
