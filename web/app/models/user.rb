class User < ActiveRecord::Base
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
