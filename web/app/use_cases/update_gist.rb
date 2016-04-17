class UpdateGist
  include UseCase

  def call(user, uid, name:, content:)
    gist = user.gists.find_by!(uid: uid)
    gist.update!(name: name, content: content)
  end
end
