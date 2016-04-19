require "administrate/base_dashboard"

class GistDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    id: Field::Number,
    name: Field::String,
    content: Field::Text,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    uid: Field::String,
  }

  COLLECTION_ATTRIBUTES = [
    :uid,
    :name,
    :user,
    :created_at,
    :updated_at
  ]

  SHOW_PAGE_ATTRIBUTES = [
    :uid,
    :user,
    :name,
    :content,
    :created_at,
    :updated_at,
  ]
  FORM_ATTRIBUTES = []

  def display_resource(gist)
    gist.uid
  end
end
