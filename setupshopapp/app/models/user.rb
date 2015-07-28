class User < ActiveRecord::Base
  # Include default devise modules.
  has_one :shopkeeper
  has_one :shopper


  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
end
