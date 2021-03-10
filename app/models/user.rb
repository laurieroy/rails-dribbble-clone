class User < ApplicationRecord
  has_person_name
  has_many :shots, dependent: :destroy
  has_many :commentss, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
end
