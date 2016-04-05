# == Schema Information
#
# Table name: gists
#
#  id         :integer          not null, primary key
#  name       :string
#  content    :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_gists_on_user_id  (user_id)
#

class Gist < ActiveRecord::Base
  belongs_to :user

  validates :name, :content, :user, presence: true
end
