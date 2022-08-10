class User < ApplicationRecord
    has_secure_password
    has_many :trips
    has_many :tasks, through: :trips
    has_many :travel_methods, through: :trips
    has_many :method_tasks, through: :travel_methods

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 6}
end
