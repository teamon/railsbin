class UpdateGist
  include UseCase

  def call(user, uid, content:, **_)
    gist = user.gists.find_by!(uid: uid)
    gist.update!(content: content)
    gist
  end
end
