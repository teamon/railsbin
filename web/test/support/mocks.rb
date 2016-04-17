module Mocks
  def create_user(attrs = {})
    User.create!({
      uid: "xyz#{rand(10000)}",
      email: "user@example.com"
    }.merge(attrs))
  end

  def create_gist(attrs = {})
    Gist.create!(mock_gist_attributes.merge(
      user: create_user
    ).merge(attrs))
  end

  def mock_gist_attributes(attrs = {})
    {
      name: "Hello",
      content: "1+2"
    }.merge(attrs)
  end

  def mock_auth_success
    @current_user = create_user

    OmniAuth.config.test_mode = true
    OmniAuth.config.mock_auth[:github] = OmniAuth::AuthHash.new(
      current_user.attributes
    )

    get_via_redirect "/auth/github"
  end

  def current_user
    @current_user
  end

  def json
    JSON.parse(body)
  end
end
