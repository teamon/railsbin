# == Schema Information
#
# Table name: hosts
#
#  id         :integer          not null, primary key
#  address    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Host < ActiveRecord::Base
  has_many :containers

  validates :address, presence: true
end
