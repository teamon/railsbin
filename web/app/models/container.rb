# == Schema Information
#
# Table name: containers
#
#  id         :integer          not null, primary key
#  cid        :string
#  port       :integer
#  state      :string
#  host_id    :integer
#  user_id    :integer
#  gist_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_containers_on_gist_id  (gist_id)
#  index_containers_on_host_id  (host_id)
#  index_containers_on_user_id  (user_id)
#

class Container < ActiveRecord::Base
  belongs_to :host
  belongs_to :user
  belongs_to :gist

  validates :cid, :port, :state, :host, :user, :gist, presence: true

  def short_cid
    cid[0..9]
  end

  def address
    "http://#{host.address}:#{port}"
  end
end
