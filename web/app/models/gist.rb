# == Schema Information
#
# Table name: gists
#
#  id             :integer          not null, primary key
#  name           :string
#  content        :text
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  uid            :string
#  host_id        :integer
#  container_id   :string
#  container_port :integer
#
# Indexes
#
#  index_gists_on_host_id  (host_id)
#  index_gists_on_uid      (uid) UNIQUE
#  index_gists_on_user_id  (user_id)
#

class Gist < ActiveRecord::Base
  belongs_to :user
  belongs_to :host

  validates :content, :user, presence: true

  def state
    if new_record?
      "new"
    elsif container_id.present?
      "running"
    else
      "stopped"
    end
  end
end
