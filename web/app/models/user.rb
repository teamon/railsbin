# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  uid        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  has_many :gists
  has_many :containers

  validates :uid, presence: true, uniqueness: true

  def self.find_or_create_with_omniauth(auth)
    if user = find_by(uid: auth.uid)
      user
    else
      create!(
        uid:    auth.uid,
        name:   auth.info["nickname"],
        email:  auth.info["email"]
      )
    end
  end
end
