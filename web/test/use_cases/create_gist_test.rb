require "test_helper"

class CreateGistTest < ActiveSupport::TestCase
  include Mocks

  def test_generate_uid_on_create
    gist = CreateGist.call(create_user, mock_gist_attributes)
    assert_not_empty gist.uid
  end

  def test_do_not_regenerate_uid_on_update
    gist = create_gist
    uid = gist.uid

    gist.update!(content: "1+2+3")
    assert_equal uid, gist.uid
  end

  def test_rescue_from_collision
    uids = ["a", "a", "b"]
    generator = ->(){ uids.shift }

    create_gist = CreateGist.new(generator)

    gist1 = create_gist.call(create_user, mock_gist_attributes)
    gist2 = create_gist.call(create_user, mock_gist_attributes)

    assert_not_equal gist1.uid, gist2.uid
  end

  def test_rescue_from_collision_but_raise_after_too_many_tries
    generator = ->(){ "a" }

    create_gist = CreateGist.new(generator)
    gist1 = create_gist.call(create_user, mock_gist_attributes)
    assert_raise do
      create_gist.call(create_user, mock_gist_attributes)
    end
  end
end
