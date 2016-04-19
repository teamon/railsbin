require "administrate/base_dashboard"

class HostDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    address: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }

  COLLECTION_ATTRIBUTES = [
    :id,
    :address,
    :created_at,
  ]

  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :address,
    :created_at,
    :updated_at,
  ]

  FORM_ATTRIBUTES = [
    :address,
  ]

  # Overwrite this method to customize how hosts are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(host)
    "Host[#{host.address}]"
  end
end
