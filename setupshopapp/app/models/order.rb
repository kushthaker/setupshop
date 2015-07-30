class Order < ActiveRecord::Base
  belongs_to :shopper
  # has_and_belongs_to_many :products
end
