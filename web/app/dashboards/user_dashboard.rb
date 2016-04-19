require "administrate/base_dashboard"

class UserDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    gists: Field::HasMany,
    id: Field::Number,
    name: Field::String,
    email: Field::String,
    uid: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }

  COLLECTION_ATTRIBUTES = [
    :uid,
    :name,
    :email,
    :gists,
    :created_at
  ]

  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :uid,
    :name,
    :email,
    :gists,
    :created_at,
    :updated_at,
  ]

  FORM_ATTRIBUTES = [
    :gists,
    :name,
    :email,
    :uid,
  ]

  def display_resource(user)
    user.name
  end
end
