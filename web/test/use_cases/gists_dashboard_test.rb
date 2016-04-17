require "test_helper"

class GistsDashboardTest < ActiveSupport::TestCase
  include Mocks

  def setup
    @user = create_user

    @gist1 = CreateGist.call(@user, mock_gist_attributes(name: "Hello"))
    @gist2 = CreateGist.call(@user, mock_gist_attributes(name: "World"))
  end

  def dashboard
    GistsDashboard.call(@user)
  end

  def test_size
    assert_equal 2, dashboard.stopped.size
  end

  def test_order
    @gist1.touch
    assert_equal dashboard.stopped[0].name, "Hello"

    @gist2.touch
    assert_equal dashboard.stopped[0].name, "World"
  end
end
